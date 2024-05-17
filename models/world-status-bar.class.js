class WorldStatusBars extends World {
  statusBars = [];

  constructor(canvas, keyboard) {
    super(canvas, keyboard);
    this.initBars();
  }

  // /**
  //  * Initialises the statusBars
  //  */
  // initBars() {
  //   this.statusBars.push(
  //     new CharacterStatusBar(),
  //     new CoinStatusBar(),
  //     new BottleStatusBar()
  //   );
  // }

  // /**
  //  * Add bars in "draw()" for WorldstatusBars class.
  //  */
  // addBars() {
  //   this.ctx.translate(-this.camera_x, 0);
  //   this.addObjectsToMap(this.statusBars);
  //   this.ctx.translate(this.camera_x, 0);
  // }
}
