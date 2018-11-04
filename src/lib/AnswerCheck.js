export default class AnswerCheck {
  result = [];

  check(guess, answer, level) {
    var diff = guess - answer;
    var diffAbs = Math.abs(guess - answer);

    if (guess === answer) {
      this.result = ["YOU WIN", ""];
    } else {
      if (level === "EASY") {
        if (diffAbs < 2) {
          this.result = [
            "BOILING : ",
            "indicator--red fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 4) {
          this.result = [
            "HOT : ",
            "indicator--orange fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 5) {
          this.result = [
            "WARM : ",
            "indicator--yellow fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 7) {
          this.result = [
            "COLD : ",
            "indicator--green fa fa-thermometer-0 fa-2x"
          ];
        } else if (diff < 9) {
          this.result = [
            "FROSTY : ",
            "indicator--cyan fa fa-thermometer-0 fa-2x"
          ];
        } else {
          this.result = [
            "FREEZING : ",
            "indicator--blue fa fa-thermometer-0 fa-2x"
          ];
        }
      }

      if (level === "MEDIUM") {
        if (diffAbs < 20) {
          this.result = [
            "BOILING : ",
            "indicator--red fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 40) {
          this.result = [
            "HOT : ",
            "indicator--orange fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 50) {
          this.result = [
            "WARM : ",
            "indicator--yellow fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 70) {
          this.result = [
            "COLD : ",
            "indicator--green fa fa-thermometer-0 fa-2x"
          ];
        } else if (diff < 90) {
          this.result = [
            "FROSTY : ",
            "indicator--cyan fa fa-thermometer-0 fa-2x"
          ];
        } else {
          this.result = [
            "FREEZING : ",
            "indicator--blue fa fa-thermometer-0 fa-2x"
          ];
        }
      }

      if (level === "HARD") {
        if (diffAbs < 200) {
          this.result = [
            "BOILING : ",
            "indicator--red fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 400) {
          this.result = [
            "HOT : ",
            "indicator--orange fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 500) {
          this.result = [
            "WARM : ",
            "indicator--yellow fa fa-thermometer-0 fa-2x"
          ];
        } else if (diffAbs < 700) {
          this.result = [
            "COLD : ",
            "indicator--green fa fa-thermometer-0 fa-2x"
          ];
        } else if (diff < 900) {
          this.result = [
            "FROSTY : ",
            "indicator--cyan fa fa-thermometer-0 fa-2x"
          ];
        } else {
          this.result = [
            "FREEZING : ",
            "indicator--blue fa fa-thermometer-0 fa-2x"
          ];
        }
      }

      if (diff > 0) {
        this.result[0] += "SMALLER";
      } else {
        this.result[0] += "BIGGER";
      }
    }
    return this.result;
  }
}
