import React, { Component } from "react";
import Text from "./Text";
import Carousel from "./Carousel";
import Partner from "./Partner";

import "./Home.css";

const items = [
  {
    url: "Images/character1.png"
  },
  {
    url: "Images/character2.png"
  },
  {
    url: "Images/character3.png"
  },
  {
    url: "Images/character4.png"
  },
  {
    url: "Images/character5.png"
  },
  {
    url: "Images/character6.png"
  },
  {
    url: "Images/character7.png"
  },
  {
    url: "Images/character8.png"
  },
  {
    url: "Images/character9.png"
  }
];

class Home extends Component {
  render() {
    return (
      <div className="Home row justify-content-between">
        <Text />
        <Carousel items={items} active={0} />
        <Partner />
      </div>
    );
  }
}

export default Home;
