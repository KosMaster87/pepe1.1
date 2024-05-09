"use strict";

class Chicken extends MovableObject {
  y = 390;
  height = 30;
  width = 25;

  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");

    /**
     * Das super() startet auch diese fn.
     * this. ist der Initiator für diesen Karakter. Die loadImages() wird dann in der Eltern Klasse "drawable-object.class.js weiter ausgeführt."
     */
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 10000;
    this.speed = 0.15 + Math.random() * 0.25; // Random speed!
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 1000 / 7);
  }
}
