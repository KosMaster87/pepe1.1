"use strict";

class Bottle extends PickableObject {
  constructor(x, y) {
    super().loadImage("./img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 60;
  }
}
