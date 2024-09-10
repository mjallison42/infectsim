import 'entity.dart';
import 'normal.dart';

class Model {
  String name;
  double rate;
  double mortality;
  double illnessPeriod;
  double immuneBoost;

  Model( String n, {double rate, double mortality, illnessPeriod, immuneBoost} ) {
    name = n;
    this.rate = rate;
    this.mortality = mortality;
    this.illnessPeriod = illnessPeriod;
    this.immuneBoost   = immuneBoost;
  }

  void apply( double time, Entity en, NormalRandom nr ) {
    if( en.deceased ) return;

    var chance = nr.get() + immuneBoost;
    if (! en.infected && chance <= rate) {
      en.infect(time);
    }

    if( (time - en.infectionTime) > illnessPeriod ) {
      if( nr.get() < mortality ) {
        en.deceased = true;
      } else {
        en.recover();
      }
    }
  }
}
