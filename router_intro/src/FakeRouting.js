// This is the "fake" routing implementation
// THIS CODE WON'T WORK UNLESS YOU MOVE IT INTO APP.JS
import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "about" };
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  renderPage() {
    switch (this.state.page) {
      case "contact":
        return <Contact />;
      case "dog":
        return <Dog />;
      default:
        return <About />;
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <a onClick={() => this.changePage("about")}>About</a>
          <a onClick={() => this.changePage("contact")}>Contact</a>
          <a onClick={() => this.changePage("dog")}>Dog</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
