import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './NavbarFooter/Navbar'
import Footer from './NavbarFooter/Footer'
import Search from "./Search/Search";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Search" component={Search} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
