
import 'dart:math';

import 'model.dart';
import 'entity.dart';
import 'normal.dart';

enum BuildingType { home, community, hospital, medical, restaurant, school, shop, theater }

class Building {
  BuildingType type = BuildingType.home;
  int          id;
  String       typeString = '?';
  List<Entity> occupants = [];

  Building( BuildingType t, int id ) {
    type = t;
    this.id = id;
    var ts = t.toString();
    var idx = ts.indexOf('.');
    typeString = ts.substring( idx+1, idx+2);
  }
}

abstract class Environment {
  void populate( List<Entity> pop, Random rng );
  void move( Entity en, double time, Random r );
  void leave( Entity en );
  void infect( Model m, double t, Random r, NormalRandom nr );
  int census();
  Building find( int entityId );
}

class Housing extends Environment {
  int size_x;
  int size_y;

  List<List<Building>> rooms;

  Housing(int max_x, int max_y) {
    size_x = max_x;
    size_y = max_y;

    rooms = List<List<Building>>(max_y);
    for (var i = 0; i < max_y; i++) {
      rooms[i] = List<Building>(max_x);
      for (var j = 0; j < max_x; j++) {
        rooms[i][j] = Building(BuildingType.home, -1);
      }
    }
  }

  // Distribute population to domiciles
  @override
  void populate(List<Entity> population, Random rng) {
    // Each house gets one occupant, the extras are then randomly assigned.
    num nextE = 0;

    for (var y = 0; y < size_y; y++) {
      for (var x = 0; x < size_x; x++) {
        var e = population[nextE++];
        rooms[y][x].occupants.add(e);
        e.setHome(x, y);

        if (nextE >= population.length) {
          return; // out of population
        }
      }
    }

    // Randomly assign to a room
    while (nextE < population.length) {
      var x = rng.nextInt(size_x);
      var y = rng.nextInt(size_y);

      var e = population[nextE++];
      rooms[y][x].occupants.add(e);
      e.setHome(x, y);
    }
  }

  @override
  void move(Entity en, double time, Random r) {
    var new_x = r.nextInt(3) - 1 + en.x;
    var new_y = r.nextInt(3) - 1 + en.y;

    if (new_x < 0) new_x = 0;
    if (new_x >= size_x) new_x = size_x - 1;

    if (new_y < 0) new_y = 0;
    if (new_y >= size_y) new_y = size_y - 1;

    rooms[en.y][en.x].occupants.remove(en);

    en.place(new_x, new_y);
    rooms[en.y][en.x].occupants.add(en);
  }

  @override
  void leave( Entity en ) {
    rooms[en.y][en.x].occupants.remove(en);
  }

  // If anyone in the room is infected, they all get could get it.
  @override
  void infect(Model m, double t, Random r, NormalRandom nr) {
    for (var y = 0; y < size_y; y++) {
      for (var x = 0; x < size_x; x++) {
        var infected = false;
        for (var en in rooms[y][x].occupants) {
          infected |= en.infected;
        }

        if (!infected) continue;

        var dead = [];
        for (var en in rooms[y][x].occupants) {
          m.apply(t, en, nr);

          if (en.deceased) {
            dead.add(en);
            leave(en);
          }
        }

        for (var d in dead) {
          rooms[y][x].occupants.remove(d);
        }
      }
    }
  }

  @override
  int census() {
    var count = 0;
    for (var y = 0; y < size_y; y++) {
      for (var x = 0; x < size_x; x++) {
          count += rooms[y][x].occupants.length;
      }
    }
    return count;
  }

  @override
  // Used to find an entity, using linear search. Mostly for debugging.
  Building find(int entityId) {
    for (var y = 0; y < size_y; y++) {
      for (var x = 0; x < size_x; x++) {
        for( var en in rooms[y][x].occupants ) {
          if( en.id == entityId )
            return rooms[y][x];
        }
      }
    }
    return null;
  }
}

class BusinessDistrict extends Environment {

  List<Building> bldgs = [];

  List<Building> communityCenters = [];
  List<Building> hospitals = [];
  List<Building> medicalOffices = [];
  List<Building> restaurants = [];
  List<Building> schools = [];
  List<Building> shops = [];
  List<Building> theaters = [];

  BusinessDistrict( int populationCount ) {
    // Provision core buildings
    // 1 school per 200 students, assume 1/3 of population is school age
    var schoolCount = (populationCount / 3) ~/ 200 + 1;

    // 1 hospital per 100,000 population
    var hospitalCount = populationCount ~/ 100000 + 1;

    // medical offices per 1000 population
    var medicalCount = populationCount ~/ 1000 + 1;

    var buildingCount = populationCount ~/ 200;
    if( buildingCount < 16 ) buildingCount = 16;

    // balance will be spread between shop, restaurant, theater, community
    var balanceCount = buildingCount - schoolCount - hospitalCount - medicalCount;

    var blockCount = balanceCount ~/ 4;

    while( bldgs.length < buildingCount ) {
      if( schoolCount-- > 0 ) {
        Building bl = Building(BuildingType.school, bldgs.length);
        bldgs.add(bl);
        schools.add(bl);
      }

      if( hospitalCount-- > 0 ) {
        Building bl = Building(BuildingType.hospital, bldgs.length);
        bldgs.add(bl);
        hospitals.add(bl);
      }

      if( medicalCount-- > 0 ) {
        Building bl = Building(BuildingType.medical, bldgs.length);
        bldgs.add(bl);
        medicalOffices.add(bl);
      }

      makeBlock( blockCount, buildingCount );
    }
  }

  void makeBlock( int blockCount, int buildingCount ) {
    var t = BuildingType.community;
    for( var bc = 0; bc < blockCount && bldgs.length < buildingCount; bc++ ) {
      Building bl = Building(t, bldgs.length);
      bldgs.add(bl);
      switch( t ) {
        case BuildingType.community : {
          communityCenters.add(bl);
          t = BuildingType.restaurant;
          break;
        }
        case BuildingType.restaurant: {
          restaurants.add(bl);
          t = BuildingType.shop;
          break;
        }
        case BuildingType.shop      : {
          shops.add(bl);
          t = BuildingType.theater;
          break;
        }
        case BuildingType.theater   : {
          theaters.add(bl);
          t = BuildingType.community;
          break;
        }
        default : {
          print( 'Error picking next BuildingType $t' );
        }
      }
    }
  }

  @override
  int census() {
    var count = 0;
    for( Building b in bldgs ) {
      count += b.occupants.length;
    }
    return count;
  }

  @override
  void infect(Model m, double t, Random r, NormalRandom nr) {
    for( Building b in bldgs ) {
      var infected = false;
      for (var en in b.occupants) {
        infected |= en.infected;
      }

      if (!infected) continue;

      var dead = [];
      for (var en in b.occupants) {
        m.apply(t, en, nr);

        if (en.deceased) {
          dead.add(en);
        }
      }

      for (var d in dead) {
        leave(d);
      }
    }
  }

  @override
  void leave( Entity en ) {
    if( en.inTown >= 0 ) {
      bldgs[en.inTown].occupants.remove(en);
      en.inTown = -1;
    }
  }

  @override
  void move(Entity en, double time, Random r) {
    // TODO: implement move
  }

  void visit( int idx, Entity en ) {
    Building b = bldgs[idx];
    b.occupants.add(en);
    en.inTown = idx;
  }

  @override
  void populate(List<Entity> pop, Random rng) {
    // TODO: implement populate
  }

  @override
  // Used to find an entity, using linear search. Mostly for debugging.
  Building find(int entityId) {
    for (var b in bldgs ) {
      for( var en in b.occupants ) {
        if( en.id == entityId )
          return b;
      }
    }
    return null;
  }
}