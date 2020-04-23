import 'entity.dart';
import 'normal.dart';

class Model {
  double rate;
  double mortality;
  int    illnessPeriod;

  Model( {double rate, double mortality, illnessPeriod} ) {
    this.rate = rate;
    this.mortality = mortality;
    this.illnessPeriod = illnessPeriod;
  }

  apply( int time, Entity en, NormalRandom nr ) {
    if (! en.infected && nr.get() <= rate)
      en.infect(time);

    if( (time - en.infectionTime) > illnessPeriod ) {
      if( nr.get() < mortality ) {
        en.deceased = true;
      }
    }
  }
}
