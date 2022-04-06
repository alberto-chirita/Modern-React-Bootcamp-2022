import pug from "./pug.jpg";
import "./Dog.css";

function Dog() {
  return (
    <div className="Dog">
      <h1>DOG!</h1>
      <img className="Dog-img" src={pug} alt="pug" />
    </div>
  );
}

export default Dog;
