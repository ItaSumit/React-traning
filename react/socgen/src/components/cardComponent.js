import React, { Component } from "react";
import "./cardComponent.css";
class CardComponent extends Component {
  render() {
    return (
      <div className="cards">
        <div className="cardsImage">Image Area</div>
        <div className="cardsText">Text Area</div>
      </div>
    );
  }
}

export default CardComponent;
