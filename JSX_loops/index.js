class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} />
        <Friend name="Frieda" hobbies={["Drawing", "Painting"]} />
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
