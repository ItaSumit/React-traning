import React from "react";
import CardComponent from "../../components/cards/cardComponent";
import HeaderComponent from "../../components/header/headerComponent";

import "./creaditCardPage.css";
import CardData from "../../data/cards.json";

class CreaditCardPage extends React.Component {
  state = {
    headerTitle: "Header"
  };

  claickHandler = data => {
    this.setState({
      headerTitle: data
    });
  };

  renderCards = (d, index) => {
    return <CardComponent {...d} claickHandler={this.claickHandler} />;
  };

  render() {
    return (
      <div>
        <HeaderComponent headerTitle={this.state.headerTitle} />
        <div className="cardHolder">
          {CardData.map((d, index) => this.renderCards(d, index))}
        </div>
      </div>
    );
  }
}

export default CreaditCardPage;
