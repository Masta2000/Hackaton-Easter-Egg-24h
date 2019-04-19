import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './NavbarFooter/Navbar'
import Footer from './NavbarFooter/Footer'
import Search from "./Search/Search";
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
        <Navbar />

        <Switch>
          <Route exact path="/" />
          <Route path="/Search" component={Search} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
