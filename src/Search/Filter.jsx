import React, { Component } from "react";

import "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      displayList: [],
      character: [
        { src: "Images/Adjudicator_Rick.png" },
        { src: "Images/Albert_Einstein.png" },
        { src: "Images/Alien_Rick.png" },
        { src: "Images/Beth_Smith.png" },
        { src: "Images/Cult_Leader_Morty.png" },
        { src: "Images/Jerry_Smith.png" },
        { src: "Images/Morty_Smith_.png" },
        { src: "Images/Rick_Sanchez.png" },
        { src: "Images/Summer_Smith.png" }
      ],

      egg: [
        { src: "Images/Egg_of_chameleon.png" },
        { src: "Images/Egg_of_fighting_Fish_Siamese.png" },
        { src: "Images/Egg_of_Fighting.png" },
        { src: "Images/Egg_of_Frog_Bull.png" },
        { src: "Images/Egg_of_Gull_Heiring.png" },
        { src: "Images/Egg_of_Hellbender copie.png" },
        { src: "Images/Egg_of_Ostrich copie.png" },
        { src: "Images/Egg_of_Sturgeon_Atlantic.png" },
        { src: "Images/Strange_Egg copie.png" }
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
