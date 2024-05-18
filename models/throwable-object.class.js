"use strict";

class ThrowableObject extends MovableObject {
  IMAGES_ROTATION = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
];
IMAGES_SPLASH = [
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
];

  width = 40;
  height = 40;

  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    // this.x = 0;
    // this.y = 300;
    this.throw(800, 0);
  }

  /**
   * Der Wurf der Flaschen.
   */
  throw() {
    // this.x = x;
    // this.y = y;
    this.speedY = 10; // Geschwindigkeit und weg auf der Y-Achse.
    this.applyGravity();
    /**
     * Geschwindigkeit und weg auf der X-Achse.
     */
    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
