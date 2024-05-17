"use strict";

let canvas;
let world;
let keyboard;
let character;
// let keyboard = new Keyboard();

/**
 * new World loud the canvas in world.class.ja
 */
function init() {
  canvas = document.getElementById("canvas");
  keyboard = new Keyboard();
  world = new World(canvas, keyboard);
  // character = new Character(world);

  // console.log(world.character);
  // console.log(world.enemies);

  
}

