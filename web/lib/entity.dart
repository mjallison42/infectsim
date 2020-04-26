
import 'dart:math';

enum AgeGroup { young, midlife, retired }

class Entity {
  static int  idCounter = 0;

  int      id;
  AgeGroup age;

  bool    infected      = false;
  bool    pastInfection = false;
  double  infectionTime = 0;
  bool    deceased      = false;
  bool    immune        = false;

  int     x;
  int     y;
  int     home_x;
  int     home_y;
  int     inTown;

  Entity( Random r ) {
    id        = idCounter++;
    infected  = false;
    inTown    = -1;
    switch( r.nextInt(2) ) {
      case 0: {
        age = AgeGroup.young;
        break;
      }

      case 2: {
        age = AgeGroup.retired;
        break;
      }

      default: {
        age = AgeGroup.midlife;
        break;
      }
    }
  }

  void setHome( int x, int y ) {
    home_x = this.x = x;
    home_y = this.y = y;
  }

  void place( int x, int y ) {
    this.x = x;
    this.y = y;
  }

  void infect(double t) {
    infected  = true;
    infectionTime = t;
    pastInfection = true;
  }

  void recover() {
    infected      = false;
    infectionTime = 0;
    immune        = true;
  }

  static List<Entity> MakePopulation( num count, num infected, Random r ) {
    var l = <Entity>[];

    for( var i = 0; i < count; i++ ) {
      var e = Entity(r);
      l.add(e);
    }

    // One infected persons InfectoLand
    for( var i = 0; i < infected; i++ ) {
      final infE = Entity(r);
      infE.infected = true;
      l.add( infE );
    }

    return l;
  }
}
