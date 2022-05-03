import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import FoodSearch from "./FoodSearch";
import Food from "./Food";
// import Drink from "./Drink";
import Meal from "./Meal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FoodSearch />}>
          <Route path="food/:foodName" element={<Food />} />
          <Route path="food/:foodName/drink/:drinkName" element={<Meal />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
