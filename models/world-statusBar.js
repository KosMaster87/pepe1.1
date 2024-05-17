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
}
