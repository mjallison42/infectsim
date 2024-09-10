
import 'dart:html';
import 'dart:math';

import 'environment.dart';

class Color {
  int r;
  int g;
  int b;
  int a;

  Color( int r, int g, int b, int a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

class Button {
  final String directory = 'graphics/';
  String id;
  String disabled_image;
  String enabled_image;
  String active_image;

  ImageElement elt;

  bool state_disabled = false;
  bool state_on = false;

  var  clickListener;

  Button( String id, String dis, String en, String active ) {
    this.id = id;
    disabled_image = directory + dis;
    enabled_image = directory + en;
    active_image = directory + active;

    elt = querySelector( id );
    elt.onClick.capture( click );
  }

  void disable() {
    state_disabled = true;
    elt.src = disabled_image;
  }

  void enable() {
    state_disabled = false;
    elt.src = enabled_image;
  }

  void setOnClick( Function fn ) {
    clickListener = fn;
  }

  void click( MouseEvent ev ) {
    if( ! state_disabled ) {
      setOn();
      clickListener(this, ev);
    }
  }

  void setOn() {
    state_on = true;
    elt.src = active_image;
  }

  void setOff() {
    state_on = false;
    elt.src = enabled_image;
  }
}

abstract class AbstractCanvasAdapter {
  final bkgnd = Color(255, 255, 255, 255);
  final black = Color(  0,   0,   0, 255);
  final empty = Color(240, 240, 240, 255);
  final infCol = Color(255, 0, 0, 255);
  final immuneCol = Color(255, 255, 0, 255);
  final healthCol = Color(0, 255, 0, 255);

  final margin = 0.5;

  CanvasElement canvas;
  Element       container;
  CanvasRenderingContext2D context;

  AbstractCanvasAdapter( CanvasElement c, Element cont ) {
    canvas = c;
    container = cont;
    context = canvas.context2D;
  }

  void setFillColor(Color c) {
    context.setFillColorRgb(c.r, c.g, c.b, c.a);
  }

  Color colorOf( Building b ) {
    if (b.occupants.isEmpty) {
      return empty;
    } else {
      var infectedCount = 0;
      var immuneCount = 0;
      for (var en in b.occupants) {
        if (en.infected) {
          infectedCount++;
        }
        if (en.immune) {
          immuneCount++;
        }
      }

      if( infectedCount == 0 && immuneCount == 0 ) {
        return healthCol ;
      } else if ( infectedCount > 0 ) {
        return infCol ;
      } else {
        return immuneCol ;
      }
    }
  }
}

class HousingCanvasAdapter extends AbstractCanvasAdapter {
  HousingCanvasAdapter( CanvasElement c, Element cont ) : super(c, cont) ;

  void adjustSize() {
//    num pSize = min( container.clientWidth, window.innerHeight-250);
//    canvas.width = pSize;
//    canvas.height = pSize;
  }

  void drawEnv( Housing env ) {
    setFillColor(bkgnd);
    final width = canvas.width;
    final height = canvas.height;
    context.fillRect(0, 0, width, height);

    var lotWidth = width / env.size_x;
    var lotHeight = height / env.size_y;

    var bldgWidth = lotWidth - margin * 2;
    var bldgHeight = lotHeight - margin * 2;

    for (var y = 0; y < env.size_y; y++) {
      for (var x = 0; x < env.size_x; x++) {
        setFillColor( colorOf( env.rooms[y][x] ) );
        var ix = x * lotWidth;
        var iy = y * lotHeight;
        context.fillRect(ix, iy, bldgWidth, bldgHeight);
      }
    }
  }
}

class BusinessCanvasAdapater extends AbstractCanvasAdapter {
  BusinessCanvasAdapater( CanvasElement c, Element cx ) : super( c, cx );

  void adjustSize() {
//    canvas.width = container.clientWidth;
  }

  void drawEnv( BusinessDistrict bd ) {
    setFillColor(bkgnd);

    // I'm so crappy with HTML, I can't seem to get the values set in the CSS.
    // So I'm hacking it in as hardwired.
    final width = canvas.width;
    final height = canvas.height;
    context.fillRect(0, 0, width, height);

    var sqArea = width * height;
    var lotArea = sqArea / bd.bldgs.length;
    var rows = height ~/ sqrt(lotArea).truncate() + 1;
    var lotSize = height ~/ rows;
    var maxBlockCount = (bd.bldgs.length / rows).truncate();

    var lotHeight = lotSize;
    var lotWidth  = lotSize;

    var bldgWidth = lotWidth - margin*2;
    var bldgHeight = lotHeight - margin*2;

//    print( "width $width" );
//    print( "height $height" );
//    print( "b# ${bd.bldgs.length}" );
//    print( "maxBlockCount $maxBlockCount" );
//    print( "rows $rows" );
//    print( "lot <$lotWidth,$lotHeight>" );
//    print( "bld <$bldgWidth,$bldgHeight>" );

    var x = 0.0;
    var y = height * 1.0 - lotHeight;

    var xCounter = 0;

    // Hacked, should get this from the font
    var fs = 12;
    var xo = (lotWidth - fs);
    var yo = fs;
    for( var b = 0; b < bd.bldgs.length; b++ ) {
      setFillColor( colorOf( bd.bldgs[b]) );
      context.fillRect(x, y, bldgWidth, bldgHeight);
      var t = bd.bldgs[b].typeString;
      context.strokeText( t, x + xo, y + yo );

      x = x + lotWidth;
      xCounter++;
      if( xCounter > maxBlockCount ) {
        xCounter = 0;
        x = 0;
        y -= lotHeight;
      }
    }
  }
}
