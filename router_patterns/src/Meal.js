import { useParams } from "react-router-dom";
import "./Meal.css";

function Meal() {
  const { foodName, drinkName } = useParams();
  const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
  const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;

  return (
    <div className="Meal">
      <h1>
        THIS IS A MEAL OF {foodName} + {drinkName}
      </h1>
      <img src={foodUrl} alt={foodName} />
      <img src={drinkUrl} alt={drinkName} />
    </div>
  );
}

export default Meal;
