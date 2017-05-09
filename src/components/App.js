import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './header';
import SubHeader from './subHeader';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <SubHeader/>
      </div>
    );
  }
}

export default App;
