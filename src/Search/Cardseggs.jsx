import React, { Component } from "react";
import Cardeggs from "./Cardeggs";
class Cardseggs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: []
    };
  }

  componentDidMount() {
    fetch("http://easteregg.wildcodeschool.fr/api/eggs")
      .then(response => response.json())
      .then(data => {
        this.setState({
          eggs: data
        });
      });
  }
  render() {
    const { eggs } = this.state;
    return (
      <div className="Cards row justify-content-center">
        {eggs.map(egg =>
          <Cardeggs egg={egg} />
        )}
      </div>
    );
  }
}

export default Cardseggs;
