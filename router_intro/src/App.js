import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";
import "./App.css";

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink
            className={({ isActive }) => (isActive ? " active-link" : "")}
            to="/dog"
          >
            Dog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? " active-link" : "")}
            to="/dog/c"
          >
            Dog(c)
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? " active-link" : "")}
            to="/dog/r"
          >
            Dog(r)
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? " active-link" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? " active-link" : "")}
            to="/"
          >
            About
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dog" element={<Dog name="Muffins" />} />
          <Route path="/dog/c" element={<Dog name="Muffins" />} />
          <Route path="/dog/r" element={<Dog name="Biscuits" />} />
          <Route path="/dog/hater" element={<Hater />} />
        </Routes>
      </div>
    );
  }
}

export default App;
