import React, { Component } from "react";
import './App.css'
import CardComponent from './components/cardComponent';
import HeaderComponent from './components/headerComponent';

import InformationComponent from './components/informationComponent';

class App extends Component {
  //Mandatory Life Cycle method
  render() {
    return ( <div>
      <HeaderComponent/>
      <div className="cardArea">
          <div className="cardAreaHeader">
              Welcome to React
          </div>
          <div className="cardAreaCardHolder">
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
             <CardComponent/>
          </div>
      </div>
      <InformationComponent/>
  </div>)
  }
}

export default App;
