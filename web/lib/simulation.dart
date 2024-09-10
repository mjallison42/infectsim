import 'dart:math';

import 'city.dart';
import 'entity.dart';
import 'model.dart';
import 'normal.dart';
import 'policy.dart';

abstract class SimulationListener {
  void simulationEvent( City city, double time, int infected, int deceased );
  void showStats( Model m );
}

enum TimePeriod { day, evening, night }

class Simulation {
  final        timeIncrement = 0.25;
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

  city.housing.populate(population, rng);
  }

  TimePeriod periodFromTime( double t ) {
    var day = t.truncate();
    var hour = t - day;

    if( hour < 0.5 ) {
      return TimePeriod.day;
    }
    else if( hour < 0.75 ) {
      return TimePeriod.evening;
    }

    else {
      return TimePeriod.night;
    }
  }

  void moveAbout( double ti, TimePeriod t, Entity en, Random r ) {
    switch( t ) {
      case TimePeriod.day: {
        // All entities at home
        if( en.age == AgeGroup.young && city.business.schools.isNotEmpty ) {
          city.housing.leave( en );
          city.business.leave( en );
          var idx = r.nextInt( city.business.schools.length);
          city.business.visit( city.business.schools[idx].id, en );
        } else if( en.age == AgeGroup.midlife && (r.nextDouble() < 0.5) ) {
          city.housing.leave( en );
          city.business.leave( en );
          var idx = r.nextInt( city.business.bldgs.length);
          city.business.visit( idx, en );
        } else if( r.nextDouble() < 0.3 ) {
          city.housing.leave( en );
          city.business.leave( en );
          var idx = r.nextInt( city.business.bldgs.length);
          city.business.visit( idx, en );
        }
        break;
      }

      case TimePeriod.evening: {
        if( r.nextDouble() < 0.5 ) {
          var ox = en.x;
          var oy = en.y;
          var ot = en.inTown;
          city.housing.leave(en);
          city.business.leave(en);

          var idx = r.nextInt(city.business.bldgs.length);
          city.business.visit(idx, en);
        }
        break;
      }

      case TimePeriod.night:
      default:
        {
          // night, leave downtown, go home
          if( en.inTown >= 0 ) {
            city.business.leave(en);
          } else {
            city.housing.leave(en);
          }
          city.housing.rooms[en.home_y][en.home_x].occupants.add(en);
        }
    }
  }

  // Used to debug and track down unintentional zombies.
  bool popCheck( double t, TimePeriod period ) {
    var actual = 0;
    var dead = [];
    for( var en in population ) {
      if( ! en.deceased ) { actual++; }
      else { dead.add(en); }
    }

    var hcensus = city.housing.census();
    var bcensus = city.business.census();
    var census = hcensus + bcensus;
    if( census != actual ) {
        print( 'Census failure $t/$period  census: $census  pop: $actual  housing: $hcensus  business: $bcensus' );
        var pop = population;
        var bus = city.business;
        var hou = city.housing;
        return false;
    } else {
        return true;
    }
  }

  int step( double t ) {
    var infectedCount = 0;
    var deceasedCount = 0;

    var period = periodFromTime(t);
    for( var en in population ) {
      if( en.deceased ) continue;

      moveAbout( t, period, en, rng );
    }
    city.housing.infect(model, t, rng, nrng);
    city.business.infect( model, t, rng, nrng );

    for( var en in population ) {
      if( en.pastInfection ) infectedCount++;
      if( en.deceased ) deceasedCount++;
    }

    listener.simulationEvent(city, t, infectedCount, deceasedCount );

    return infectedCount;
  }

  void simulate( double t0, double tmax ) {
    // Perform a single initial environment update
    var totalInfected = 0;
    var deceasedCount = 0;
    for( var en in population ) {
      if( en.pastInfection ) {
        totalInfected++;
      }
      if( en.deceased ) { // Usually don't start out with deceased people
        deceasedCount++;
      }
    }
    listener.simulationEvent(city, t0, totalInfected, deceasedCount );

    for( var t = t0; t < tmax; t++ ) {
      var infCount = step( t );

      if( infCount >= maxPopulation ) {
        break;
      }
    }
  }
}
