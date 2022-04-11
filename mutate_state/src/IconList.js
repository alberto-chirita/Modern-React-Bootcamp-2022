import React, { Component } from "react";

export default class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch",
    ],
  };

  constructor(props) {
    super(props);
    this.state = { icons: ["bone", "cloud"] };
  }

  //   addIcon = () => {
  //     let randIndex = Math.floor(Math.random() * this.props.options.length);
  //     let newIcon = this.props.options[randIndex];
  //     let icons = this.state.icons;
  //     icons.push(newIcon);
  //     this.setState({ icons: icons });
  //   };

  addIcon = () => {
    let randIndex = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[randIndex];
    let icons = [...this.state.icons, newIcon];
    this.setState({ icons: icons });
  };

  render() {
    const icons = this.state.icons.map((i, index) => (
      <i className={`fas fa-${i}`} key={index} />
    ));

    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}
