import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Food from "./Food";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food/:name" element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;
