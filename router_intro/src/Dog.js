import React, { Component } from "react";
import "./Dog.css";

export class Dog extends Component {
  componentDidMount() {
    console.log("DOG DID MOUNT!");
  }

  componentWillUnmount() {
    console.log("DOG WILL UNMOUNT!");
  }

  render() {
    console.log("DOG RENDER!");
    return (
      <div className="Dog">
        <h1>Dog!!!</h1>
        <h3>This dog is named: {this.props.name}</h3>
        <img
          src="https://www.ctvnews.ca/polopoly_fs/1.5277048.1611428206!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg"
          alt="pug"
        />
      </div>
    );
  }
}

export default Dog;
