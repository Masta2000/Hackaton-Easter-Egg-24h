import React, { Component } from "react";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <SearchBar />
        <Filter />
      </div>
    );
  }
}

export default Search;
