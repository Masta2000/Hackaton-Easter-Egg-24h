import React, { Component } from "react";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h1>Complete list of Rick and Morty's collectible cards</h1>
        <SearchBar />
        <Filter />
      </div>
    );
  }
}

export default Search;
