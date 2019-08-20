import React from "react";

class ViewComponent extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.data.customerId}</li>
          <li>{this.props.data.customerName}</li>
          <li>{this.props.data.customerAge}</li>
          <li>{this.props.data.customerCountry}</li>
        </ul>
      </div>
    );
  }
}

export default ViewComponent;
