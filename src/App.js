import React, { Component } from 'react';
import Navbar from './NavbarFooter/Navbar'
import Footer from './NavbarFooter/Footer'
import Text from './NavbarFooter/Text'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Text />
        <Footer />
      </div>
    );
  }
}

export default App;
