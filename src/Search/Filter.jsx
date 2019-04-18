import React, { Component } from "react";

import "./Filter.css";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      displayList: [],
      character: [
        { image: "Images/Adjudicator_Rick.png" },
        { image: "Images/Albert_Einstein.png" },
        { image: "Images/Alien_Rick.png" },
        { image: "Images/Beth_Smith.png" },
        { image: "Images/Cult_Leader_Morty.png" },
        { image: "Images/Jerry_Smith.png" },
        { image: "Images/Morty_Smith_.png" },
        { image: "Images/Rick_Sanchez.png" },
        { image: "Images/Summer_Smith.png" }
      ],

      egg: [
        { image: "Images/Egg_of_chameleon.png" },
        { image: "Images/Egg_of_fighting_Fish_Siamese.png" },
        { image: "Images/Egg_of_Fighting.png" },
        { image: "Images/Egg_of_Frog_Bull.png" },
        { image: "Images/Egg_of_Gull_Heiring.png" },
        { image: "Images/Egg_of_Hellbender copie.png" },
        { image: "Images/Egg_of_Ostrich copie.png" },
        { image: "Images/Egg_of_Sturgeon_Atlantic.png" },
        { image: "Images/Strange_Egg copie.png" }
      ]
    };
  }

  handleClickCharacter = () => {
    this.setState({
      displayList: [...this.state.character]
    });
  };

  handleClickEgg = () => {
    this.setState({
      displayList: [...this.state.egg]
    });
  };

  handleClickAll = event => {
    this.setState({
      displayList: [...this.state.egg, ...this.state.character]
    });
  };

  render() {
    return (
      <div className="Filter container-fluid">
        <div className="row justify-content-center">
          <button className="button btn" onClick={this.handleClickEgg}>
            Egg
          </button>
          <button className="button btn" onClick={this.handleClickCharacter}>
            Characters
          </button>
          <button className="button btn" onClick={this.handleClickAll}>
            All
          </button>
        </div>
        <ul className="cards row justify-content-center">
          {this.state.displayList.map(el => (
              <li className="card col-xs-12 col-sm-6 col-lg-3 row justify-content-center">
                <img src={el.image} />
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
