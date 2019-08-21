import React from "react";
import FormComponent from "../../components/forms/formComponent";
import TableComponent from "../../components/table/tableComponent";
import ViewComponent from "../../components/view/viewComponent";
import axios from "axios";

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
    },
    postData: [],
    photosData: [],
    isPosts: true
  };

  postsColumnns = [
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
  ];

  photosColumns = [
    {
      Header: "Album Id",
      accessor: "albumId"
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
      Header: "Url",
      accessor: "url"
    },
    {
      Header: "Thumbnail",
      accessor: "thumbnailUrl"
    }
  ];

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        // handle success
        this.setState({
          postData: res.data
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, privState) {
    if (privState.isPosts !== this.state.isPosts) {
      if (this.state.isPosts) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then(res => {
            // handle success
            this.setState({
              postData: res.data
            });
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
      } else {
        axios
          .get("https://jsonplaceholder.typicode.com/photos")
          .then(res => {
            // handle success
            this.setState({
              photosData: res.data
            });
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
      }
    }
  }

  componentWillMount() {
    console.log("LiquidityPage will mount.");
  }

  toggleData = () => {
    this.setState({
      isPosts: !this.state.isPosts
    });
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
        <button onClick={this.toggleData}>Toggle</button>
        {/* <TableComponent
          data={
            this.state.isPosts ? this.state.postData : this.state.photosData
          }
          columns={this.state.isPosts ? this.postsColumnns : this.photosColumns}
          onViewHandler={this.onViewHandler}
          onDeleteHandler={d => this.onDeleteHandler(d)}
        /> */}
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
