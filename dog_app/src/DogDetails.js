import React from "react";
import { Link, useParams } from "react-router-dom";
import { getDog } from "./data.js";
import "./DogDetails.css";

function DogDetails(props) {
  let params = useParams();
  let dog = getDog(params.name);

  return dog ? (
    <div className="DogDetails row justify-content-center mt-5">
      <div className="col-11 col-lg-5">
        <div className="DogDetails-card card">
          <img className="card-img-top" src={dog.src} alt={dog.name} />
          <div className="card-body">
            <h2 className="card-title">{dog.name}</h2>
            <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
          </div>
          <ul className="list-group list-group-flush">
            {dog.facts.map((fact, index) => (
              <li key={index} className="list-group-item">
                {fact}
              </li>
            ))}
          </ul>
          <div className="card-body">
            <Link to="/dogs" className="btn btn-primary">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ padding: "1rem" }}>
      <p>{`There is no dog named ${params.name}`}</p>
    </div>
  );
}

export default DogDetails;
