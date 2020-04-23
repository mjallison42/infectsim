
import 'dart:math';

import 'environment.dart';

class NameGenerator {
  static const suffixes = [ 'ton', ' City', 'field', 'tor', 'dor', 'ta', 'more',
                            ' Village', ' Township', ' Falls', ' Plains', ' Springs',
                            ' Ditch', ' Creek', ' Lake', ' Canyon', ' Bay', ' Harbor',
                            ' Shores', ' Vista', ' View', ' by the Sea', ' Town',
                            'dale', ' Bridge', ' Grove', 'ville', 'land', ' Landing',
                            ' Oaks', ' Woods', ' Valley', ' Flat', ' Peak', ' Rapids',
                            ' Cut', ' Basin', ' Pass', ' Point', ' Grove', ' Bend',
                            ' Haven', ' Beach', ' Pairie', ' Park', ' Shore', ' Point',
                            ' Cove', ' Hill', ' Bluff', ' Crossing', ' Falls',
                            ' Junction', ' Hallow', ' Rest', ' Knoll', ' Cave',
                            ' Gate', ' Ridge',
                            'mont', 'ly', 'burg', 'ham', 'wold', 'ford', 'son', 'well',
                            'wick'];

  static const prefix   = [ 'New ', 'Old ', 'St. ', 'Ban-', 'Tri-', 'Mor', 'Grand ', 'Mt. ', 'Mar ',
                            'North ', 'East ', 'West ', 'South ', 'Port ', 'Fort ', 'Red ',
                            'Green ', 'Blue ', 'Big ', 'Ben ', 'Main ' ];

  static const roots    = [ 'beaver', 'river', 'clerp', 'pleasant', 'plain',
                            'spunt', 'spung', 'twang', 'null', 'modus', 'mung',
                            'hack', 'fox', 'bear', 'hawk', 'ball', 'dodge', 'crab',
                            'spider', 'meep', 'keel', 'gunge', 'sping', 'nerp',
                            'eagle', 'swan', 'duck', 'desert', 'rock',
                            'apple', 'orange',
                            'john', 'mary', 'smith', 'adam', 'eve', 'thor', 'loki',
                            'anthony', 'ignatio', 'charles', 'avery', 'zelda', 'luke',
                            'vader', 'solo', 'sam', 'merry', 'narr',
                            'buckle', 'belt', 'potter', 'cobble', 'cooper', 'zipper',
                            'button', 'poont', 'zow', 'glerge', 'shrike', 'clang',
                            'turtle', 'vaca', 'astra',
                            'bang', 'ting', 'ooch', 'swarf', 'wort', 'sparge',
                            'bug', 'palp', 'cap', 'bar', 'poole', 'ween',
                            'bool', 'knuth', 'wirth', 'tur', 'ada', 'babbage', 'hopper' ];

  static String generate() {
    Random r = Random();

    var suffix = '';
     if( r.nextDouble() < 0.5 ) {
      var suffixIdx = r.nextInt(suffixes.length);
      suffix = suffixes[suffixIdx];

      if( suffix.startsWith( ' ' ) && r.nextDouble() < 0.1 ) {
        suffix = "'s" + suffix;
      }
    }

    var pre = '';
    if( suffix.isEmpty || r.nextDouble() < 0.25 ) {
      var prefixIdx = r.nextInt(prefix.length);
      pre = prefix[prefixIdx];
    }

    var rootIdx = r.nextInt(roots.length);
    String root = roots[rootIdx];

    // Capitalize root in some circumstances
    if( pre.isEmpty || pre.endsWith(' ') || pre.endsWith('-') ) {
      var first = root.substring( 0, 1 );
      var rest  = root.substring( 1 );
      root = first.toUpperCase() + rest;
    }

    // Sometimes there is not root, e.g. 'Fort Point', 'North Shore', etc.
    var hd = r.nextDouble();
    if( pre.endsWith(' ') && suffix.startsWith(' ') && (hd < 0.5) ) {
      return pre.substring( 0, pre.length-1 ) + suffix;
    }
    else {
      // Most common case.
      return pre + root + suffix;
    }
  }
}

class City {
  String name;
  Housing suburbanShores;

  City( int sx, int sy ) {
    name = NameGenerator.generate();
    suburbanShores = Housing(sx, sx);
  }
}