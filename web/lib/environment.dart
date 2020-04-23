
import 'dart:math';

import 'model.dart';
import 'entity.dart';
import 'normal.dart';

abstract class Environment {
  void populate( List<Entity> pop, Random rng );
  void move( Entity en, Random r );
  void infect( Model m, int t, Random r, NormalRandom nr );
  int census();
}

class Housing extends Environment {
  int size_x;
  int size_y;

  List<List<List<Entity>>> rooms;

  Housing( int max_x, int max_y ) {
    size_x = max_x;
    size_y = max_y;

    rooms = List<List<List<Entity>>>(max_y);
    for( var i = 0; i < max_y; i++ ) {
      rooms[i] = List<List<Entity>>(max_x);
      for( var j = 0; j < max_x; j++ ) {
        rooms[i][j] = <Entity>[];
      }
    }
  }

  // Distribute population to domiciles
  @override
  void populate( List<Entity> population, Random rng ) {
    // Each house gets one occupant, the extras are then randomly assigned.
    num nextE = 0;

    for( var y = 0; y < size_y; y++ ) {
      for( var x = 0; x < size_x; x++ ) {
        var e = population[nextE++];
        rooms[y][x].add( e );
        e.setHome( x, y );

        if( nextE >= population.length )
          return; // out of population
      }
    }

    // Randomly assign to a room
    while( nextE < population.length ) {
      var x = rng.nextInt( size_x );
      var y = rng.nextInt( size_y );

      var e = population[nextE++];
      rooms[y][x].add(e);
      e.setHome( x, y );
    }
  }

  @override
  void move( Entity en, Random r ) {
    var new_x = r.nextInt(3) - 1 + en.x;
    var new_y = r.nextInt(3) - 1 + en.y;

    if( new_x < 0 )       new_x = 0;
    if( new_x >= size_x ) new_x = size_x-1;

    if( new_y < 0 )       new_y = 0;
    if( new_y >= size_y ) new_y = size_y-1;

    rooms[en.y][en.x].remove(en);

    en.place( new_x, new_y );
    rooms[en.y][en.x].add(en);
  }

  // If anyone in the room is infected, they all get could get it.
  @override
  void infect( Model m, int t, Random r, NormalRandom nr ) {
    for( var y = 0; y < size_y; y++ )
      for( var x = 0; x < size_x; x++ ) {
        var infected = false;
        for( var en in rooms[y][x] ) infected |= en.infected;

        if( ! infected ) continue;

        var dead = [];
        for( var en in rooms[y][x] ) {
          m.apply( t, en, nr );

          if( en.deceased ) dead.add(en);
        }

        for( var d in dead )
          rooms[y][x].remove(d);
      }
  }

  @override
  int census() {
    var count = 0;
    for( var y = 0; y < size_y; y++ ) {
      for( var x = 0; x < size_x; x++ ) {
        for( var en in rooms[y][x] ) count++;
      }
    }
    return count;
  }
}
