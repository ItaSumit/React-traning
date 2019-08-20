import React from "react";
import "./cardComponent.css";

class CardComponent extends React.Component {
  onClickHandler = () => {
    this.props.claickHandler(this.props.title);
  };

  render() {
    return (
      <div className="card" onClick={this.onClickHandler}>
        <div className="cardImage">{this.props.title} </div>
        <div className="cardTitle">{this.props.desc}</div>
      </div>
    );
  }
}

export default CardComponent;
