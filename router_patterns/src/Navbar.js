import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  let navigate = useNavigate();

  const handleLogin = () => {
    alert("LOGGED YOU IN!");
    navigate("/food/salmon");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="Navbar">
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

export default Navbar;
