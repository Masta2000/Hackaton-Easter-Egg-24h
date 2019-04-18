import React from "react";
import "./Cardegg.css";

const Cardcharac = ({ egg }) => (
  <div className="Cardegg col-xs-12 col-sm-6 col-lg-3 row justify-content-center">
    <div className="name">
      <p>{egg.name}</p>
    </div>
    <div className="image">
      <img src={egg.image} alt="image" />
    </div>
    <div className="rarity">{egg.rarity}</div>
    <div className="power">{egg.power}</div>
  </div>
);

export default Cardcharac;
