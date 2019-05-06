class CountDownTimer {
  constructor(minutes) {
    var time = minToMill(minutes);
    var now = Date.now();
  }

  minToMill(min) {
    return min * 6000;
  }
}
