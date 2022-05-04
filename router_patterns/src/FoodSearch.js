// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class FoodSearch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { query: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleChange(evt) {
//     this.setState({ query: evt.target.value });
//   }
//   handleClick() {
//     //Do something
//     alert("SAVED YOUR FOOD TO DB!");
//     //redirect somewhere else
//     this.props.history.push(`/food/${this.state.query}`);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Search For A Food!</h1>
//         <input
//           type='text'
//           placeholder='search for a food'
//           value={this.state.query}
//           onChange={this.handleChange}
//         />
//         <Link to={`/food/${this.state.query}`}>Go!</Link>
//         <button onClick={this.handleClick}>Save New Food!</button>
//       </div>
//     );
//   }
// }
// export default FoodSearch;

import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function FoodSearch() {
  const [query, setQuery] = useState("");
  let navigate = useNavigate();

  const handleChange = (ev) => {
    setQuery(ev.target.value);
  };

  const handleClick = () => {
    //Do something
    alert("SAVED YOUR FOOD TO DB!");

    //redirect somewhere else
    navigate(`/food/${query}`);
  };

  return (
    <div>
      <h1>Search For A Food</h1>
      <input
        type="text"
        placeholder="Search for a food"
        value={query}
        onChange={handleChange}
      />
      <Link to={`/food/${query}`}>Go!</Link>
      <button onClick={handleClick}>Save New Food!</button>
      <Outlet />
    </div>
  );
}

export default FoodSearch;
