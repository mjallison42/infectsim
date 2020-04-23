import 'dart:math';

import 'environment.dart';
import 'entity.dart';
import 'model.dart';
import 'normal.dart';
import 'policy.dart';

abstract class SimulationListener {
  void simulationEvent( Housing env, int time, int infected, int deceased );
}

class Simulation {
  Random       rng;
  NormalRandom nrng;

  Housing  env;
  Model        model;
  List<Entity> population;
  int          maxPopulation;
  SimulationListener listener;
  Policy       policy;

  Simulation( Housing e, Model m, List<Entity> pop, Policy p, SimulationListener l ) {
  rng = Random();
  nrng = NormalRandom();

  env           = e;
  model         = m;
  population    = pop;
  maxPopulation = pop.length;
  policy        = p;
  listener      = l;

  env.populate(population, rng);
  }

  int step( int t ) {
    var infectedCount = 0;
    var deceasedCount = 0;

    for( var en in population ) {
      env.move( en, rng );
    }
    env.infect(model, t, rng, nrng);

    for( var en in population ) {
      if( en.infected ) infectedCount++;
      if( en.deceased ) deceasedCount++;
    }

    listener?.simulationEvent(env, t, infectedCount, deceasedCount );

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
    listener?.simulationEvent(env, t0, infectedCount, deceasedCount );

    for( var t = t0; t < tmax; t++ ) {
      var infCount = step( t );

      if( infCount >= maxPopulation ) {
        break;
      }
    }
  }
}
