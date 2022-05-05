import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar(props) {
  const { dogs } = props;

  const dogLinks = dogs.map((dog, index) => (
    <li key={index} className="nav-item">
      <NavLink className="nav-link" to={`/dogs/${dog.name}`}>
        {dog.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dogs">
          Dog App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dogs">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
