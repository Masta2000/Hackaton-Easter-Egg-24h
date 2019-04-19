import React, { Component } from 'react';
import Navbar from './NavbarFooter/Navbar'
import Footer from './NavbarFooter/Footer'
import Search from "./Search/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import "./App.css";




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Router>
          <Route path="/Search" component={Search} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
