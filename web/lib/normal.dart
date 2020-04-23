import 'dart:math';
import 'package:normal/normal.dart';

// Normal distribution number source
class NormalRandom {
  Random     r    = Random();
  static int max  = 2000;
  int        next = max;         // Initialize to max causes the list to be generated
  List<num>  nums;

  double unclampedGet() {
    if( next >= max ) {
      var s = r.nextInt(1000000);
      nums = Normal.generate( max, mean: 0.5, variance: 0.03, seed: s );
      next = 0;
    }

    return nums[next++];
  }

  double get() {
    num n;
    do {
      n = unclampedGet();
    } while( n < 0 || n >= 1 );

    return n;
  }

  void test() {
    final max = 10000;

    var l = List<int>(100);
    for( var i = 0; i < 100; i++ ) {
      l[i] = 0;
    }

    for( var i = 0; i < max; i++ ) {
      var nr = get() * 100;
      var idx = nr.truncate();
      l[idx]++;
    }

    for( var i = 0; i < 100; i++ ) {
      print( '${l[i]}' );
    }
  }
}

