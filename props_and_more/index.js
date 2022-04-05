class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={4}
          img="https://www.emaramures.ro/wp-content/uploads/2019/12/hello-750x347.jpeg"
        />
        <Hello to="Britney" from="Adele" bangs={10} />
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
