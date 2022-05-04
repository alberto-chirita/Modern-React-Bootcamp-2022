import React from "react";
import { useParams } from "react-router-dom";
import "./DogDetails.css";

function DogDetails(props) {
  const params = useParams();
  const { src } = props;

  return (
    <div className="DogDetails col-md-6 col-lg-4 text-center">
      <img src={src} alt="" />
    </div>
  );
}

export default DogDetails;
