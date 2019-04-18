import React, { Component } from 'react';
import Navbar from './NavbarFooter/Navbar'
import Footer from './NavbarFooter/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
