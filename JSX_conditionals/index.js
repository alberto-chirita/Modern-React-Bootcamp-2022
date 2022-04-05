function getNum() {
  const random = Math.floor(Math.random() * 10) + 1;
  return random;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>CONGRATS YOU WIN!</h2>
          <img src="https://media3.giphy.com/media/nXxOjZrbnbRxS/giphy.gif?cid=790b7611fd7dbe491672783c3749dafcd38c363b0961b8ca&rid=giphy.gif&ct=g" />
        </div>
      );
    } else {
      msg = <p>Sorry You Lose!</p>;
    }
    return (
      <div>
        <h1>Your number is: {num}</h1>
        <p>{msg}</p>
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<NumPicker />);
