import "./Pokecard.css";

function Pokecard(props) {
  return (
    <div className="Pokecard">
      <div>{props.key}</div>
      <div>{props.name}</div>
      <div>{props.type}</div>
      <div>{props.exp}</div>
    </div>
  );
}

export default Pokecard;
