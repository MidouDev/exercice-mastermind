export default class InputControl {
  onInputChanged(guess) {
    guess = parseInt(guess);

    if (guess && typeof guess === "number") {
      if (guess <= 1000) {
        return guess;
      }
    } else {
      return 0;
    }
  }
}
