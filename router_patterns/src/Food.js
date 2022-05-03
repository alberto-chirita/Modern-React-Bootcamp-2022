import { useParams } from "react-router-dom";
import "./Food.css";

function Food() {
  const { foodName } = useParams();
  const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;

  return (
    <div className="Food">
      <h1>I love to eat {foodName}</h1>
      <img src={foodUrl} alt={foodName} />
    </div>
  );
}

export default Food;
