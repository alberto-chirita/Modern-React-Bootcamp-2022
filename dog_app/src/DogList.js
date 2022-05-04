import React from "react";
import DogDetails from "./DogDetails";

function DogList(props) {
  const { dogs } = props;

  return (
    <div className="DogList">
      <h1 className="display-1 text-center">Dog List!</h1>
      <div className="container">
        <div className="row">
          {dogs.map((dog, index) => (
            <DogDetails key={index} src={dog.src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DogList;
