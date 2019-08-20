import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PageViewIcon from "@material-ui/icons/Pageview";
import DeleteIcon from "@material-ui/icons/Delete";

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
    },
    {
      Header: "Actions",
      accessor: "xyz",
      Cell: row => (
        <div>
          <PageViewIcon
            onClick={() => this.props.onViewHandler(row.original)}
          />
          <DeleteIcon
            onClick={() => this.props.onDeleteHandler(row.original)}
          />
        </div>
      )
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
