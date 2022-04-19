import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";
import "./App.css";

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/dog/hater" element={<Hater />} />
        </Routes>
      </div>
    );
  }
}

export default App;
