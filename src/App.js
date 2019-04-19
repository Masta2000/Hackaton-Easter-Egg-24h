import React, { Component } from 'react';
import Carousel from './Carousel';
import './App.css';

const items = [{
  url: 'Images/character1.png'
}, {
  url: 'Images/character2.png'
}, {
  url: 'Images/character3.png'
}, {
  url: 'Images/character4.png'
}, {
  url: 'Images/character5.png'
}, {
  url: 'Images/character6.png'
}, {
  url: 'Images/character7.png'
}, {
  url: 'Images/character8.png'
}, {
  url: 'Images/character9.png'
}]


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
