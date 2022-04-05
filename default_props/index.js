class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" bangsNum={4} />
        <Hello to="George" />
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
