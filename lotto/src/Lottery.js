import React, { Component } from "react";
import LottoBall from "./LottoBall";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 49,
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls }),
    };
  }

  generateNums() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (num) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick = () => {
    this.generateNums();
  };

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((num, key) => (
            <LottoBall key={key} num={num} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
