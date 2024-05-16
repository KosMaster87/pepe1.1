class StatusBar extends DrawableObject {
  IMAGES = [];
  CountStatusOfCollect = 0;
  percentage = 100;

  constructor() {
    super();
    this.x = 20;
    // this.y = 10;
    this.width = 180;
    this.height = 48;
  }

  /**
   * Wird in der world.class.js Definiert; In der "checkCollisions()", bezogen auf "energy" durch "hit()", in movable-object.class.js.
   * Bestimmung der Enerie in der Statusleiste.
   * @param {current energy from Pepe} percentage
   */
  setPercentage(percentage) {
    this.percentage = percentage;

    let path = this.IMAGES[this.resolveImagaeIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Einstufung der Energieleiste.
   * @returns number
   */
  resolveImagaeIndex() {
    if (this.CountStatusOfCollect == 0) {
      return 0;
    } else if (this.CountStatusOfCollect <= 2) {
      return 1;
    } else if (this.CountStatusOfCollect <= 4) {
      return 2;
    } else if (this.CountStatusOfCollect <= 6) {
      return 3;
    } else if (this.CountStatusOfCollect <= 8) {
      return 4;
    } else if (this.CountStatusOfCollect <= 10) {
      return 5;
    }
  }
}
