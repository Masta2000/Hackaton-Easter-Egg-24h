import React, { Component } from 'react';
import Carousel from './Carousel';
import './App.css';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel  items={items} active={0} />
      </div>
    );
  }
}

export default App;
