import 'dart:html';

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
  CanvasAdapter canvasAdapter;

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

  WebSimulationListener() {
    canvas = querySelector('#envcanvas') as CanvasElement;
    mapContainer = querySelector('#mapContainer');
    canvasAdapter = CanvasAdapter( canvas, mapContainer );

    timeStep = querySelector('#timestep');
    infected = querySelector('#infected');

    // bunch of stuff for the charts
    // Total infected
    infectedChartContainer = querySelector('#infectedChart');
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
      'title': {'text': 'Total infected'}
    };

    // Daily new
    dailyNewChartContainer = querySelector('#dailyNewChart');
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
      'title': {'text': 'Daily new cases'}
    };

    // Deceased chart
    deceasedChartContainer = querySelector('#deceasedChart');
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
      'title': {'text': 'Deceased'}
    };
  }

  void onResize() {
    canvasAdapter.adjustSize();
  }

  @override
  void simulationEvent(City city, int time, int infectedCount, int deceasedCount) {
    if( time == 0 ) {
      querySelector( '#city_name' ).text = city.name;
    }

    canvasAdapter.adjustSize();
    canvasAdapter.drawEnv( city.suburbanShores );

    // update chart data
    var data = [time, infectedCount];
    infectedData.rows.add(data);

    var dailyNew = infectedCount - yesterdayInfectedCount;
    yesterdayInfectedCount = infectedCount;
    data = [time, dailyNew];
    dailyNewData.rows.add(data);

    data = [time, deceasedCount];
    deceasedData.rows.add(data);

    // Update chart
    if( time == 0 ) {
      infectedChart.draw( infectedData, infectedChartOptions);
      dailyNewChart.draw( dailyNewData, dailyNewChartOptions );
      deceasedChart.draw( deceasedData, deceasedChartOptions );
    } else {
      infectedChart.update();
      dailyNewChart.update();
      deceasedChart.update();
    }

    timeStep.text = time.toString();
    infected.text = infectedCount.toString();
  }
}

class WebSimulation extends Simulation {
  int currentTime;
  int maxTime;

  Button play;
  Button stop;
  Button pause;

  bool stopped = false;
  bool paused  = false;

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

    querySelector("#city_name").onClick.capture(newTitle);
  }

  void animateStep(num jstime) {
    if( stopped || paused ) return;

    if (++currentTime >= maxTime) return;

    var infCount = step(currentTime);
    if( infCount < population.length ) {
      window.requestAnimationFrame(animateStep);
    }
  }

  @override
  void simulate(int t0, int t) {
    currentTime = t0;
    maxTime = t;

    super.simulate(t0, t0);
    play.setOnClick(clickStart);
  }

  void clickStart(Button b, MouseEvent e) {
    if( ! stopped ) {
      paused = false;
      stop.enable();
      pause.enable();
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
  }
}

void main() {
  final houseX = 50;
  final houseY = 50;

  // disease c-19
  final disease = Model(rate: 0.21, mortality: 0.03, illnessPeriod: 14);

  // disease z
//  final disease = Model(rate: 0.75, mortality: 1, illnessPeriod: 10000);

  final maxPopulation = houseX * houseY * 3;

  // Init the population
  final population = Entity.MakePopulation(maxPopulation, 1);
  final city = City(houseX, houseY);

  final sim = WebSimulation(
      city, disease, population, DefaultPolicy(), WebSimulationListener());
  sim.simulate(0, 2000);
}
