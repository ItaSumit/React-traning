import React, { Component } from "react";
import './App.css'
import CardComponent from './components/cardComponent';

class App extends Component {
  //Mandatory Life Cycle method
  render() {
    return ( <div>
      <div class="header">
          Header
      </div>
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
      <div className="information">
          <div className="information1">
              A
          </div>
          <div className="information2">
              B
          </div>
      </div>
  </div>)
  }
}

export default App;
