import React from "react";
import { Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function AppRoutes(props) {
  const { dogs } = props;

  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
