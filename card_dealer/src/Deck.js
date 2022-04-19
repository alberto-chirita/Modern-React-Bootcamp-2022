import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";
const API_URL = `${API_BASE_URL}/new/shuffle/`;

export class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
  }

  async componentDidMount() {
    let deck = await axios.get(API_URL);
    this.setState({ deck: deck.data });
  }

  getCard = async () => {
    let deckId = this.state.deck.deck_id;

    try {
      // make request using deck id
      let cardUrl = `${API_BASE_URL}/${deckId}/draw/`;
      let cardRes = await axios.get(cardUrl);

      if (!cardRes.data.success) {
        throw new Error("No cards remaining!");
      }

      // set state using new card info from api
      let card = cardRes.data.cards[0];
      this.setState((state) => ({
        drawn: [
          ...state.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (error) {
      alert(error);
    }
  };

  render() {
    let cards = this.state.drawn.map((card) => (
      <Card key={card.id} name={card.name} image={card.image} />
    ));

    return (
      <div className="Deck">
        <h1 className="Deck-title">♦ Card Dealer ♦</h1>
        <h2 className="Deck-title subtitle">
          ♦ A little demo made with React ♦
        </h2>
        <button className="Deck-btn" onClick={this.getCard}>
          GET CARD!
        </button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
