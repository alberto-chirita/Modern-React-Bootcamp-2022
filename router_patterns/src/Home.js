import React from "react";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <Outlet />
    </div>
  );
}

export default Home;
