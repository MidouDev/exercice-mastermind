export default class GuessesEngine {
  randomNumber = null;

  static getRandomNumber(level) {
    if (level === "EASY") {
      this.randomNumber = Math.floor(Math.random() * 11);
    }
    if (level === "MEDIUM") {
      this.randomNumber = Math.floor(Math.random() * 101);
    }
    if (level === "HARD") {
      this.randomNumber = Math.floor(Math.random() * 1001);
    }
    return this.randomNumber;
  }
}
