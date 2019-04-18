import React, { Component } from "react";
import Cardscharac from "./Cardscharac";
import Cardseggs from "./Cardseggs";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <Cardscharac />
        <Cardseggs />
      </div>
    );
  }
}

export default Search;
