import React, { Component } from "react";
import "../styles/Game.css";
import GuessesEngine from "../lib/GuessesEngine";
import InputControl from "../lib/InputControl";
import AnswerCheck from "../lib/AnswerCheck";
import PropTypes from "prop-types";

class Game extends Component {
  state = {
    level: "EASY",
    guess: 0,
    answer: null,
    result: []
  };

  inputControl = new InputControl();
  answerCheck = new AnswerCheck();

  componentDidMount() {
    this.setState({ answer: GuessesEngine.getRandomNumber(this.state.level) });
  }

  SetAnswer = level => {
    this.setState({ answer: GuessesEngine.getRandomNumber(level) });
  };

  levelChoice = chosenlevel => {
    this.setState({
      level: chosenlevel,
      guess: 0
    });
    this.SetAnswer(chosenlevel);
  };

  handleChange = e => {
    var inputValue = this.inputControl.onInputChanged(e.target.value);
    this.setState({ guess: inputValue });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      result: this.answerCheck.check(
        this.state.guess,
        this.state.answer,
        this.state.level
      )
    });
  };

  handlePlayAgain = () => {
    this.setState({
      guess: 0,
      answer: null,
      result: []
    });
  };

  render() {
    var getLevel = this.state.level;

    return (
      <div className="container">
        <div className="game-layout">
          {this.state.result[0] !== "YOU WIN" ? (
            <div>
              <div className="controls d-flex justify-content-center">
                <button
                  className={
                    getLevel === "EASY"
                      ? "btn btn-primary btn-md"
                      : "btn btn-primary-outline btn-md"
                  }
                  onClick={() => this.levelChoice("EASY")}
                >
                  EASY
                </button>
                <button
                  className={
                    getLevel === "MEDIUM"
                      ? "btn btn-primary btn-md"
                      : "btn btn-primary-outline btn-md"
                  }
                  onClick={() => this.levelChoice("MEDIUM")}
                >
                  MEDIUM
                </button>
                <button
                  className={
                    getLevel === "HARD"
                      ? "btn btn-primary btn-md"
                      : "btn btn-primary-outline btn-md"
                  }
                  onClick={() => this.levelChoice("HARD")}
                >
                  HARD
                </button>
              </div>
              <form className="mt-3">
                <input
                  className="form-control form-control-lg"
                  type="number"
                  value={this.state.guess}
                  onChange={this.handleChange}
                  style={{
                    color: "darkorchid",
                    fontSize: "30px",
                    fontWeight: "520",
                    textAlign: "center"
                  }}
                />
                <button
                  className="btn btn-success btn-lg btn-block mt-3"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  GUESS
                </button>

                <div className="form-group mt-3">
                  <div className="result">
                    <p>{this.state.result[0]}</p>
                    <i className={this.state.result[1]} />
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <div className="result">{this.state.result[0]}</div>
              <button
                className="btn btn-success btn-lg btn-block mt-3"
                onClick={this.handlePlayAgain}
              >
                PLAY AGAIN
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Game.defaultProps = {
  level: "EASY",
  guess: 0,
  answer: null,
  result: []
};

Game.propTypes = {
  level: PropTypes.string,
  guess: PropTypes.number,
  answer: PropTypes.number,
  result: PropTypes.array
};
export default Game;
