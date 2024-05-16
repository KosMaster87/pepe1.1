class CoinStatusBar extends StatusBar {
  IMAGES = [
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png",
  ];
  constructor() {
    super();
    this.y = 55;
    this.loadImages(this.IMAGES);
    this.setPercentage(0);
  }
}
