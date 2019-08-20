import React from "react";
import FormComponent from "../../components/forms/formComponent";
import TableComponent from "../../components/table/tableComponent";
import ViewComponent from "../../components/view/viewComponent";

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
    ],
    viewData: {
      customerId: "",
      customerName: "",
      customerAge: "",
      customerCountry: ""
    }
  };

  onFormSubmitHandler = customer => {
    let dataCopy = [...this.state.data];
    dataCopy.push(customer);
    this.setState({
      data: dataCopy
    });
  };

  onDeleteHandler = data => {
    const filtered = this.state.data.filter(
      d => d.customerId !== data.customerId
    );
    this.setState({
      data: filtered
    });
  };

  onViewHandler = data => {
    this.setState({
      viewData: data
    });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TableComponent
          data={this.state.data}
          onViewHandler={this.onViewHandler}
          onDeleteHandler={d => this.onDeleteHandler(d)}
        />
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <FormComponent onFormSubmitHandler={this.onFormSubmitHandler} />
          </div>
          <div style={{ width: "50%" }}>
            <ViewComponent data={this.state.viewData} />
          </div>
        </div>
      </div>
    );
  }
}

export default LiquidityPage;
