import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PageViewIcon from "@material-ui/icons/Pageview";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

class TableComponent extends React.Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        // handle success
        this.setState({
          tableData: res.data
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  componentWillMount() {
    console.log("TableComponent will mount.");
  }

  state = {
    showTable: true,
    tableData: []
  };

  toggleTable = () => {
    this.setState({
      showTable: !this.state.showTable
    });
  };

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
      accessor: "customerAge",
      Cell: row => (
        <div
          style={{
            backgroundColor: row.original.customerAge > 30 ? "red" : "null"
          }}
        >
          {row.original.customerAge}
        </div>
      )
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
        <button onClick={this.toggleTable}>Toggle Table</button>
        {this.state.showTable ? (
          <ReactTable
            defaultPageSize={5}
            className="-striped -highlight"
            data={this.props.data}
            columns={this.columns}
          />
        ) : null}
        {/* <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          data={this.state.tableData}
          filterable
          columns={[
            {
              Header: "User Id",
              accessor: "userId"
            },
            {
              Header: "Id",
              accessor: "id"
            },
            {
              Header: "Title",
              accessor: "title"
            },
            {
              Header: "Description",
              accessor: "body"
            }
          ]}
        /> */}
        {/* <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          data={this.props.data}
          filterable
          columns={this.props.columns}
        /> */}
      </div>
    );
  }
}

export default TableComponent;
