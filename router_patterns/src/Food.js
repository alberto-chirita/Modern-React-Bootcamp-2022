// useNavigate
// import { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./Food.css";

// function Food() {
//   const { foodName } = useParams();
//   const navigate = useNavigate();
//   const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;

//   useEffect(() => {
//     if (/\d/.test(foodName)) {
//       navigate("/");
//     }
//   });

//   return (
//     <div className="Food">
//       <h1>I love to eat {foodName}</h1>
//       <img src={foodUrl} alt={foodName} />
//     </div>
//   );
// }

// export default Food;

// Navigate
import { useParams, Navigate } from "react-router-dom";
import "./Food.css";

function Food() {
  const { foodName } = useParams();
  const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;

  return (
    <div className="Food">
      {/\d/.test(foodName) ? (
        <Navigate replace to="/" />
      ) : (
        <div>
          <h1>I love to eat {foodName}</h1>
          <img src={foodUrl} alt={foodName} />
        </div>
      )}
    </div>
  );
}

export default Food;
