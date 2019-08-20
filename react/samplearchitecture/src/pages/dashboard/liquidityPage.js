import React from "react";
import FormComponent from "../../components/forms/formComponent";
import TableComponent from "../../components/table/tableComponent";

class LiquidityPage extends React.Component {
  state = {
    data: [
      {
        customerId: "1000",
        customerName: "Sumit",
        customerAge: "30",
        customerCountry: "India"
      },
      {
        customerId: "1001",
        customerName: "SomeCust ",
        customerAge: "34",
        customerCountry: "India"
      }
    ]
  };

  onFormSubmitHandler = customer => {
    let dataCopy = [...this.state.data];
    dataCopy.push(customer);
    this.setState({
      data: dataCopy
    });
  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TableComponent data={this.state.data} />
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <FormComponent onFormSubmitHandler={this.onFormSubmitHandler} />
          </div>
          <div style={{ width: "50%" }}>
            <FormComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default LiquidityPage;
