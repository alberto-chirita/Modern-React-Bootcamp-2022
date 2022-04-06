import Dog from "./Dog";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dog />
      <div>I AM ANOTHER DIV, NOT IN DOG COMPONENT</div>
    </div>
  );
}

export default App;
