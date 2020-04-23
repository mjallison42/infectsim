import 'dart:math';

import 'city.dart';
import 'entity.dart';
import 'model.dart';
import 'normal.dart';
import 'policy.dart';

abstract class SimulationListener {
  void simulationEvent( City city, int time, int infected, int deceased );
}

class Simulation {
  Random       rng;
  NormalRandom nrng;

  City         city;
  Model        model;
  List<Entity> population;
  int          maxPopulation;
  SimulationListener listener;
  Policy       policy;

  Simulation( City c, Model m, List<Entity> pop, Policy p, SimulationListener l ) {
  rng = Random();
  nrng = NormalRandom();

  city          = c;
  model         = m;
  population    = pop;
  maxPopulation = pop.length;
  policy        = p;
  listener      = l;

  city.suburbanShores.populate(population, rng);
  }

  int step( int t ) {
    var infectedCount = 0;
    var deceasedCount = 0;

    for( var en in population ) {
      city.suburbanShores.move( en, rng );
    }
    city.suburbanShores.infect(model, t, rng, nrng);

    for( var en in population ) {
      if( en.infected ) infectedCount++;
      if( en.deceased ) deceasedCount++;
    }

    listener?.simulationEvent(city, t, infectedCount, deceasedCount );

    return infectedCount;
  }

  void simulate( int t0, int tmax ) {
    // Perform a single initial environment update
    var infectedCount = 0;
    var deceasedCount = 0;
    for( var en in population ) {
      if( en.infected ) {
        infectedCount++;
      }
      if( en.deceased ) { // Usually don't start out with deceased people
        deceasedCount++;
      }
    }
    listener?.simulationEvent(city, t0, infectedCount, deceasedCount );

    for( var t = t0; t < tmax; t++ ) {
      var infCount = step( t );

      if( infCount >= maxPopulation ) {
        break;
      }
    }
  }
}
