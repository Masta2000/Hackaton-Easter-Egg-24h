import React, { Component } from "react";

import SearchBar from "./SearchBar";
import Cardscharac from "./Cardscharac";
import Cardseggs from "./Cardseggs";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayList: []
    };
  }
  handleClickCharacter = () => {
    this.setState({
      displayList: <Cardscharac />
    });
  };

  handleClickEgg = () => {
    this.setState({
      displayList: <Cardseggs />
    });
  };

  handleClickAll = () => {
    this.setState({
      displayList: [<Cardscharac />, <Cardseggs />]
    });
  };

  render() {
    return (
      <div className="Search">
        <SearchBar />
        <button className="button" onClick={this.handleClickEgg}>
          Egg
        </button>
        <button className="button" onClick={this.handleClickCharacter}>
          Characters
        </button>
        <button className="button" onClick={this.handleClickAll}>
          All
        </button>
      </div>
    );
  }
}

export default Search;
