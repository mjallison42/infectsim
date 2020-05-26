import 'dart:html';
import 'dart:math';

import 'package:modern_charts/modern_charts.dart';

import 'lib/city.dart';
import 'lib/entity.dart';
import 'lib/model.dart';
import 'lib/policy.dart';
import 'lib/simulation.dart';
import 'lib/webvis.dart';

class WebSimulationListener extends SimulationListener {
  var timeStep;
  var infected;
  CanvasElement canvas;
  Element mapContainer;
  HousingCanvasAdapter housingAdapter;
  BusinessCanvasAdapater businessAdapter;

  City city;

  // Infected chart
  var infectedChartContainer;
  DataTable infectedData;
  LineChart infectedChart;
  var infectedChartOptions;

  // Infected chart
  var dailyNewChartContainer;
  int yesterdayInfectedCount = 0;
  DataTable dailyNewData;
  LineChart dailyNewChart;
  var dailyNewChartOptions;

  // Deceased chart
  var deceasedChartContainer;
  DataTable deceasedData;
  LineChart deceasedChart;
  var deceasedChartOptions;

  WebSimulationListener( City city ) {
    this.city = city;

    canvas = querySelector('#envcanvas') as CanvasElement;
    mapContainer = querySelector('#mapContainer');

    housingAdapter = HousingCanvasAdapter( canvas, mapContainer );

    var businessCanvas = querySelector( '#mainstreet' ) as CanvasElement;
    businessAdapter = BusinessCanvasAdapater( businessCanvas, mapContainer );

    timeStep = querySelector('#timestep');
    infected = querySelector('#infected');

    // Delay building the charts. If done before the page is loaded the charts
    // are too wide (AKA buggy). I didn't get onLoad to work, so I used this.
    Future.delayed( const Duration( milliseconds: 1), () { _buildCharts(); } );
  }

  void _buildCharts(  ) {
    // bunch of stuff for the charts
    // Total infected
    infectedChartContainer = querySelector('#infectedChart') as DivElement;
    infectedData = DataTable([
      ['Categories', 'Infected'],
    ]);
    infectedChart = LineChart(infectedChartContainer);

    infectedChartOptions = {
      'series': {
        'fillOpacity': 0.25,
        'labels': {'enabled': false},
        'markers': {'enabled': false},
      },

      'colors': [
        '#ff0000',
      ],

      'animation': {
        // num - The animation duration in ms.
        'duration': 0,

        // () -> void - The function that is called when the animation is complete.
        'onEnd': null
      },

      'yAxis': {'minInterval': 10},
      'title': {'text': 'Total infected'},
      'legend': {'position': 'none' }
    };

    // Daily new
    dailyNewChartContainer = querySelector('#dailyNewChart') as DivElement;
    dailyNewData = DataTable([
      ['Categories', 'New cases'],
    ]);
    dailyNewChart = LineChart(dailyNewChartContainer);

    dailyNewChartOptions = {
      'series': {
        'fillOpacity': 0.25,
        'labels': {'enabled': false},
        'markers': {'enabled': false},
      },

      'colors': [
        '#00ff00',
      ],

      'animation': {
        // num - The animation duration in ms.
        'duration': 0,

        // () -> void - The function that is called when the animation is complete.
        'onEnd': null
      },

      'yAxis': {'minInterval': 10},
      'title': {'text': 'Daily new cases'},
      'legend': {'position': 'none' }
    };

    // Deceased chart
    deceasedChartContainer = querySelector('#deceasedChart') as DivElement;
    deceasedData = DataTable([
      ['Categories', 'RIP'],
    ]);
    deceasedChart = LineChart(deceasedChartContainer);
    deceasedChartOptions = {
      'series': {
        'fillOpacity': 0.25,
        'labels': {'enabled': false},
        'markers': {'enabled': false},
      },

      'colors': [
        '#000000'
      ],

      'animation': {
        // num - The animation duration in ms.
        'duration': 0,

        // () -> void - The function that is called when the animation is complete.
        'onEnd': null
      },

      'yAxis': {'minInterval': 10},
      'title': {'text': 'Deceased'},
      'legend': {'position': 'none' }
    };

    var data = [ 0, 0 ];
    infectedData.rows.add(data);
    infectedChart.draw(infectedData, infectedChartOptions);

    dailyNewData.rows.add(data);
    dailyNewChart.draw(dailyNewData, dailyNewChartOptions);

    deceasedData.rows.add(data);
    deceasedChart.draw(deceasedData, deceasedChartOptions);
  }

  @override
  void simulationEvent(City city, double time, int infectedCount, int deceasedCount) {
    if( time == 0 ) {
      querySelector( '#city_name' ).text = city.name;
    }

    housingAdapter.adjustSize();
    housingAdapter.drawEnv( city.housing );

    businessAdapter.adjustSize();
    businessAdapter.drawEnv( city.business );

    // update chart data
    var hour = time - time.truncate();
    if( hour == 0 && time > 0 ) {
      var data = [time, infectedCount];
      infectedData.rows.add(data);

      var dailyNew = infectedCount - yesterdayInfectedCount;
      yesterdayInfectedCount = infectedCount;
      data = [time, dailyNew];
      dailyNewData.rows.add(data);

      data = [time, deceasedCount];
      deceasedData.rows.add(data);

      // Update chart
      infectedChart.update();
      dailyNewChart.update();
      deceasedChart.update();
    }

    timeStep.text = time.toString();
    infected.text = infectedCount.toString();
  }
}

class WebSimulation extends Simulation {
  double currentTime;
  double maxTime;

  Button play;
  Button single;
  Button stop;
  Button pause;

  bool stopped = false;
  bool paused  = false;
  bool singleStep = false;

  void newTitle( MouseEvent me ) {
    city.name = NameGenerator.generate();
    querySelector('#city_name').text = city.name;
  }

  WebSimulation(
      City c, Model m, List<Entity> pop, Policy p, WebSimulationListener l)
      : super(c, m, pop, p, l) {
    play = Button( '#btn_play', 'btn_play_dis.png', 'btn_play.png', 'btn_play_on.png' );
    play.enable();

    pause = Button( '#btn_pause', 'btn_pause_dis.png', 'btn_pause.png', 'btn_pause_on.png' );
    pause.disable();
    pause.setOnClick( clickPause );

    stop = Button( '#btn_stop', 'btn_stop_dis.png', 'btn_stop.png', 'btn_stop_on.png' );
    stop.disable();
    stop.setOnClick( clickStop );

    single = Button( '#btn_single', 'btn_fw_chap_dis.png', 'btn_fw_chap.png', 'btn_fw_chap_on.png' );
    single.enable();

    querySelector('#city_name').onClick.capture(newTitle);
  }

  void animateStep(num jstime) {
    if( stopped || paused ) return;

    currentTime += timeIncrement;
    if (currentTime >= maxTime) return;

    var infCount = step(currentTime);
    if( singleStep ) {
      singleStep = false;
      single.setOff();
      single.enable();
      stop.enable();
    } else if( infCount < population.length ) {
      singleStep = false;
      window.requestAnimationFrame(animateStep);
    }
  }

  @override
  void simulate(double t0, double t) {
    currentTime = t0;
    maxTime = t;

    super.simulate(t0, t0);
    play.setOnClick(clickStart);
    single.setOnClick(clickSingle);
  }

  void clickStart(Button b, MouseEvent e) {
    if( ! stopped ) {
      paused = false;
      singleStep = false;
      stop.enable();
      pause.enable();
      window.requestAnimationFrame(animateStep);
    }
  }

  void clickSingle(Button b, MouseEvent e) {
    if( ! stopped && ! singleStep ) {
      paused = false;
      singleStep = true;
      window.requestAnimationFrame(animateStep);
    }
  }

  void clickPause(Button b, MouseEvent e ) {
    paused = true;
    pause.setOn();
    play.enable();
    stop.enable();
  }

  void clickStop(Button b, MouseEvent e ) {
    stopped = true;
    play.disable();
    pause.disable();
    stop.disable();
    single.disable();
  }
}

void main() {
  final houseX = 50;
  final houseY = 50;

  // disease c-19
  final disease = Model(rate: 0.15, mortality: 0.02, illnessPeriod: 21, immuneBoost: 0.10);

  // disease z
//  final disease = Model(rate: 0.75, mortality: 1, illnessPeriod: 10000);

  final maxPopulation = houseX * houseY * 3;

  // Init the population
  Random r = Random();
  final population = Entity.MakePopulation(maxPopulation, 1, r);
  final city = City(houseX, houseY, maxPopulation);

  final sim = WebSimulation(
      city, disease, population, DefaultPolicy(), WebSimulationListener(city));
  sim.simulate(0, 2000);
}
