class WorldStatusBars extends World {
  statusbars = [];

  constructor(canvas, keyboard) {
    super(canvas, keyboard);
    this.initBars();
  }

  /**
   * Initialises the statusbars
   */
  initBars() {
    this.statusbars.push(
      new CharacterStatusBar(),
      new CoinStatusBar(),
      new BottleStatusBar()
    );
  }

  /**
   * Add bars in "draw()" for WorldStatusBars class.
   */
  addBars() {
    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToMap(this.statusbars);
    this.ctx.translate(this.camera_x, 0);
  }
}
