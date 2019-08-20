import React from "react";

class FormComponent extends React.Component {
  dataSubmitHandler = () => {
    this.props.onFormSubmitHandler(this.state);
    // alert("Form submitted:" + JSON.stringify(this.state));
  };

  state = {
    customerId: "",
    customerName: "",
    customerAge: "",
    customerCountry: ""
  };

  formHandler = event => {
    console.log(`${event.target.name}- ${event.target.value}`);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "beige" }}>
        Customer ID:
        <input
          type="text"
          value={this.state.customerId}
          onChange={this.formHandler}
          name="customerId"
        />
        <br />
        Name
        <input
          type="text"
          value={this.state.customerName}
          onChange={this.formHandler}
          name="customerName"
        />
        <br />
        Age:
        <input
          type="text"
          value={this.state.customerAge}
          onChange={this.formHandler}
          name="customerAge"
        />
        <br />
        Country:
        <input
          type="text"
          value={this.state.customerCountry}
          onChange={this.formHandler}
          name="customerCountry"
        />
        <br />
        <button type="button" onClick={this.dataSubmitHandler}>
          Submit
        </button>
      </div>
    );
  }
}

export default FormComponent;
