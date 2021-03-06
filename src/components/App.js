import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './header';
import SubHeader from './subHeader';
import Banner from './banner';
import FrontPage from './frontPage';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <SubHeader/>
        <Banner/>
        <FrontPage/>
      </div>
    );
  }
}

export default App;
