
class Entity {
  static int  idCounter = 0;

  int     id;
  bool    infected = false;
  int     infectionTime = 0;
  bool    deceased = false;
  int     x;
  int     y;
  int     home_x;
  int     home_y;

  Entity() {
    id        = idCounter++;
    infected  = false;
  }

  void setHome( int x, int y ) {
    home_x = this.x = x;
    home_y = this.y = y;
  }

  void place( int x, int y ) {
    this.x = x;
    this.y = y;
  }

  void infect( int t ) {
    infected = true;
    infectionTime = t;
  }

  static List<Entity> MakePopulation( num count, num infected ) {
    var l = <Entity>[];

    for( var i = 0; i < count; i++ ) {
      var e = Entity();
      l.add(e);
    }

    // One infected persons InfectoLand
    for( var i = 0; i < infected; i++ ) {
      final infE = Entity();
      infE.infected = true;
      l.add( infE );
    }

    return l;
  }
}
