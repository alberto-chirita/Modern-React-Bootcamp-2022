import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

export class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-head.jpg",
      },
      {
        side: "tails",
        imgSrc:
          "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/dime-coin-tail.jpg",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      curCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
  }

  randomCoin(curState) {
    const newCoin = choice(this.props.coins);

    return {
      curCoin: newCoin,
      nFlips: curState.nFlips + 1,
      nHeads: curState.nHeads + (newCoin.side === "heads" ? 1 : 0),
      nTails: curState.nTails + (newCoin.side === "tails" ? 1 : 0),
    };
  }

  flipCoin() {
    this.setState(this.randomCoin);
  }

  handleClick = () => {
    this.flipCoin();
  };

  render() {
    return (
      <div>
        <h2>Let's flip a coin!</h2>
        {this.state.curCoin && (
          <Coin
            side={this.state.curCoin.side}
            imgSrc={this.state.curCoin.imgSrc}
          />
        )}
        <button onClick={this.handleClick}>FLIP MEEEE</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
