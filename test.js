draw() {
  // clearRect => Die Canvas Reseten.
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  /**
   * Den Hintergrung zu den Bewegbaren Objekten in der X-Achse anpassen.
   */
  this.ctx.translate(this.camera_x, 0); // Die Welt verschieben. Der zweite Argument ist die Y-Achse, die nicht verschoben werden soll.
  this.addObjectsToMap(this.level.background);

  // this.addBars();
  /**
   * Funktionen für nicht gebewegbare Zeichenbare Objekte.
   */
  this.ctx.translate(-this.camera_x, 0);

  // 1. Das hier ändern
  this.statusBars.forEach(sb => {
    this.addToMap(sb);
  });
  // this.addToMap(this.statusBars); // Entfernen
  this.ctx.translate(this.camera_x, 0);

  /**
   * Funktionen für bewegbare Zeichenbare Objekte.
   */
  this.addToMap(this.character);
  this.addObjectsToMap(this.level.clouds);
  this.addObjectsToMap(this.level.enemies);
  this.addObjectsToMap(this.throwableObjects);
  this.ctx.translate(-this.camera_x, 0);

  /**
   * this.draw() fps aktion.
   */
  self = this;
  requestAnimationFrame(function () {
    self.draw();
  });
}

// ---------------------------------------------------------------------------------------

      // 1. Das hier ändern
      this.statusBars.statusBars.forEach(sb => {
        this.addToMap(sb);
      });
      // this.addToMap(this.statusBars); // Entfernen
      this.ctx.translate(this.camera_x, 0);

// ---------------------------------------------------------------------------------------


class WorldStatusBars {
  statusBars = [];

  constructor() {
    this.initBars();
  }

  /**
   * Initialises the statusBars
   */
  initBars() {
    this.statusBars.push(
      new CharacterStatusBar(),
      new CoinStatusBar(),
      new BottleStatusBar()
    );
  }

  // /**
  //  * Add bars in "draw()" for WorldstatusBars class.
  //  */
  // addBars() {
  //   this.ctx.translate(-this.camera_x, 0);
  //   this.addObjectsToMap(this.statusBars);
  //   this.ctx.translate(this.camera_x, 0);
  // }
}
// ---------------------------------------------------------------------------------------