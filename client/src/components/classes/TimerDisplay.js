class TimerDisplay {
  constructor(millis) {
    this.millis = millis;
  }

  calcDisplayTime = () => {
    let m = this.millis;
    let hour = Math.floor(m / 3600000);
    let min = Math.floor((m - hour * 3600000) / 60000);
    let sec = (m % 60000) / 1000;

    if (hour < 10 && hour > 0) {
      hour = "0" + hour;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 0) {
      return hour + ":" + min + ":" + sec;
    }
    return min + ":" + sec;
  };
}

module.exports = TimerDisplay;
