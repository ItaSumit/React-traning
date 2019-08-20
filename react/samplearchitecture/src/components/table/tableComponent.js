import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class TableComponent extends React.Component {
  columns = [
    {
      Header: "Customer Id",
      accessor: "customerId"
    },
    {
      Header: "Name",
      accessor: "customerName"
    },
    {
      Header: "Age",
      accessor: "customerAge"
    },
    {
      Header: "Country",
      accessor: "customerCountry"
    }
  ];

  render() {
    return (
      <div>
        <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          data={this.props.data}
          columns={this.columns}
        />
      </div>
    );
  }
}

export default TableComponent;
