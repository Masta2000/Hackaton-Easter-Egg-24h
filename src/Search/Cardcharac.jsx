import React, {Component} from "react";
import "./Cardcharac.css";

class Cardcharac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch("http://easteregg.wildcodeschool.fr/api/characters")
      .then(response => response.json())
      .then(data => {
        this.setState({
          characters: data,
        });
      });
  }
  render() {
    const charac = this.props.charac
    return (
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
  }
}

export default Cardcharac;
