import React from "react";

class FormComponent extends React.Component {
  componentDidMount() {
    console.log("FormComponent mounted.");
  }

  componentWillMount() {
    console.log("FormComponent will mount.");
  }

  dataSubmitHandler = () => {
    this.props.onFormSubmitHandler(this.state.formData);
    // alert("Form submitted:" + JSON.stringify(this.state));
  };

  state = {
    formData: {
      customerId: "",
      customerName: "",
      customerAge: "",
      customerCountry: ""
    }
  };

  formHandler = event => {
    // console.log(`${event.target.name}- ${event.target.value}`);
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "beige" }}>
        Customer ID:
        <input
          type="text"
          value={this.state.formData.customerId}
          onChange={this.formHandler}
          name="customerId"
        />
        <br />
        Name
        <input
          type="text"
          value={this.state.formData.customerName}
          onChange={this.formHandler}
          name="customerName"
        />
        <br />
        Age:
        <input
          type="text"
          value={this.state.formData.customerAge}
          onChange={this.formHandler}
          name="customerAge"
        />
        <br />
        Country:
        <input
          type="text"
          value={this.state.formData.customerCountry}
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
