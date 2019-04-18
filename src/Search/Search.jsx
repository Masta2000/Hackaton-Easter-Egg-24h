
import React, { Component } from "react";
import Filter from './Filter'
import SearchBar from './SearchBar';
import Cardscharac from "./Cardscharac";
import Cardseggs from "./Cardseggs";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: "",
        displayList: [],
    }
  }
handleClickCharacter = () => {
  console.log(<Cardscharac/>)
    this.setState({
        displayList: <Cardscharac />
    })
}

handleClickEgg = () => {
    this.setState({
        displayList: <Cardseggs/>
    })
}

handleClickAll = () => {
    this.setState({
        displayList: [<Cardscharac/>, <Cardseggs/>]
    })
}
    
  render() {
    return (
      <div className="Search">
        <SearchBar />
      
                <Filter/>
                <Cardscharac />
                <Cardseggs />
        
      </div>
    );
  }
}

export default Search;
