
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
  final String directory = "graphics/";
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
    this.disabled_image = directory + dis;
    this.enabled_image = directory + en;
    this.active_image = directory + active;

    elt = querySelector( id );
    elt.onClick.capture( click );
  }

  void disable() {
    this.state_disabled = true;
    elt.src = disabled_image;
  }

  void enable() {
    this.state_disabled = false;
    elt.src = enabled_image;
  }

  void setOnClick( Function fn ) {
    this.clickListener = fn;
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

class CanvasAdapter {
  final bkgnd = Color(255, 255, 255, 255);
  final empty = Color(240, 240, 240, 255);
  final infCol = Color(255, 0, 0, 255);
  final healthCol = Color(0, 255, 0, 255);

  CanvasElement canvas;
  Element       container;
  var           context;

  CanvasAdapter( CanvasElement c, Element cont ) {
    canvas = c;
    container = cont;
    context = canvas.context2D;
  }

  void adjustSize() {
    num pSize = min( container.clientWidth, window.innerHeight-100);
    canvas.width = pSize;
    canvas.height = pSize;
  }

  void setFillColor(Color c) {
    context.setFillColorRgb(c.r, c.g, c.b, c.a);
  }

  void drawEnv( Housing env ) {
    setFillColor(bkgnd);
    final width = canvas.width;
    final height = canvas.height;
    context.fillRect(0, 0, width, height);

    final margin = 0.25;

    var lotWidth = width / env.size_x;
    var lotHeight = height / env.size_y;

    var bldgWidth = lotWidth - margin * 2;
    var bldgHeight = lotHeight - margin * 2;

    for (var y = 0; y < env.size_y; y++) {
      for (var x = 0; x < env.size_x; x++) {
        if (env.rooms[y][x].isEmpty) {
          setFillColor(empty);
        } else {
          var infectedCount = 0;
          for (var en in env.rooms[y][x]) {
            if (en.infected) {
              infectedCount++;
            }
            setFillColor((infectedCount == 0) ? healthCol : infCol);
          }
        }
        var ix = x * lotWidth;
        var iy = y * lotHeight;
        context.fillRect(ix, iy, bldgWidth, bldgHeight);
      }
    }
  }
}