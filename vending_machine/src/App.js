import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="chips" element={<Chips />} />
        <Route path="sardines" element={<Sardines />} />
        <Route path="soda" element={<Soda />} />
      </Routes>
    </div>
  );
}

export default App;
