import React, { Component } from "react";

export class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>Dog!!!</h1>
        <img
          src="https://www.ctvnews.ca/polopoly_fs/1.5277048.1611428206!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg"
          alt="pug"
        />
      </div>
    );
  }
}

export default Dog;
