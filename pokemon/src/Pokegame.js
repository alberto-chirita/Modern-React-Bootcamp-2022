import Pokedex from "./Pokedex";
import "./Pokegame.css";

function Pokegame(props) {
  const { pokemons } = props;

  let firstHand = [];
  let secondHand = [...pokemons];

  while (firstHand.length < secondHand.length) {
    const randomIndex = Math.floor(Math.random() * secondHand.length);
    const randomPokemon = secondHand.splice(randomIndex, 1)[0];
    firstHand.push(randomPokemon);
  }

  const firstHandExp = parseInt(
    firstHand.reduce(
      (totalExp, pokemon) => totalExp + pokemon.base_experience,
      0
    )
  );

  const secondHandExp = parseInt(
    secondHand.reduce(
      (totalExp, pokemon) => totalExp + pokemon.base_experience,
      0
    )
  );

  return (
    <div className="Pokegame">
      <Pokedex
        pokemons={firstHand}
        exp={firstHandExp}
        isWinner={firstHandExp > secondHandExp}
      />
      <Pokedex
        pokemons={secondHand}
        exp={secondHandExp}
        isWinner={firstHandExp < secondHandExp}
      />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemons: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};

export default Pokegame;
