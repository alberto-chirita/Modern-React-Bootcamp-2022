class Hello extends React.Component {
  render() {
    return <h1>Hello there!</h1>;
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
