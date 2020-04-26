import 'entity.dart';
import 'normal.dart';

class Model {
  double rate;
  double mortality;
  int    illnessPeriod;
  double immuneBoost;

  Model( {double rate, double mortality, illnessPeriod, immuneBoost} ) {
    this.rate = rate;
    this.mortality = mortality;
    this.illnessPeriod = illnessPeriod;
    this.immuneBoost   = immuneBoost;
  }

  apply( double time, Entity en, NormalRandom nr ) {
    if( en.deceased ) return;

    var chance = nr.get() + immuneBoost;
    if (! en.infected && chance <= rate)
      en.infect(time);

    if( (time - en.infectionTime) > illnessPeriod ) {
      if( nr.get() < mortality ) {
        en.deceased = true;
      } else {
        en.recover();
      }
    }
  }
}
