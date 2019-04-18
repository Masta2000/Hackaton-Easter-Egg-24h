import React, { Component } from "react";
import Cardcharac from "./Cardcharac";
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch("http://easteregg.wildcodeschool.fr/api/characters")
      .then(response => response.json())
      .then(data => {
        this.setState({
          characters: data,
        });
      });
  }
  render() {
    const { characters } = this.state;
    return (
      <div className="Cards row justify-content-center">
        {characters.map(character =>
          <Cardcharac charac={character} />
        )}
      </div>
    );
  }
}

export default Cards;
