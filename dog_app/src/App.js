import React from "react";
import { getDogs } from "./data";
import Navbar from "./Navbar";
import AppRoutes from "./AppRoutes";

import "./App.css";

function App() {
  const dogs = getDogs();

  return (
    <div className="App">
      <Navbar dogs={dogs} />
      <div className="container">
        <AppRoutes dogs={dogs} />
      </div>
    </div>
  );
}

export default App;
