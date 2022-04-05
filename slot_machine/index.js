class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine s1="🍒" s2="🍒" s3="🍒" />
        <Machine s1="🍊" s2="🍒" s3="🍊" />
        <Machine s1="🍒" s2="🍊" s3="🍊" />
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
