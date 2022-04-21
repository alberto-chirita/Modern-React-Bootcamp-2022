import { useParams } from "react-router-dom";
import "./Food.css";

function Food() {
  const { name } = useParams();
  // const foodUrl = `https://source.unsplash.com/1600x900/?${name}`;

  return (
    <div className="Food">
      {/* <h1>I love to eat {name}</h1>
      <img src={foodUrl} alt={name} /> */}
    </div>
  );
}

export default Food;
