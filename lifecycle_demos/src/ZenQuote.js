import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

export class ZenQuote extends Component {
  constructor(props) {
    console.log("INSIDE CONSTRUCTOR");
    super(props);
    this.state = { quote: "", isLoaded: false };
  }

  componentDidMount() {
    console.log("INSIDE COMPONENT DID MOUNT");
    // load data
    axios.get("https://api.github.com/zen").then((response) => {
      // wait 3 seconds just to be dramatic (so we can see the loading icon)
      setTimeout(() => {
        // set state with the response data
        this.setState({ quote: response.data, isLoaded: true });
      }, 3000);
    });
  }

  componentDidUpdate() {
    console.log("INSIDE COMPONENT DID UPDATE");
  }

  render() {
    console.log("INSIDE RENDER");
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    );
  }
}

export default ZenQuote;
