import React from "react";
import "./Cardcharac.css";

const Cardcharac = ({ charac }) => (
  <div className="Cardcharac col-xs-12 col-sm-6 col-lg-3 row justify-content-center">
    <div className="name">
      <p>
        {charac.name} from {charac.origin}
      </p>
    </div>
    <div className="image">
      <img src={charac.image} alt="image" />
    </div>
    <div className="skills">
      {charac.skills.map(i => (
        <p> {i} </p>
      ))}
    </div>
  </div>
);

export default Cardcharac;
