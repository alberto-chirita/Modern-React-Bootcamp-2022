import "./Pokecard.css";

const pokeAPI =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  const { id, name, type, exp } = props;
  const imageSrc = `${pokeAPI}${id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{name}</div>
      <img className="Pokecard-image" src={imageSrc} alt={name} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">Exp: {exp}</div>
    </div>
  );
}

export default Pokecard;
