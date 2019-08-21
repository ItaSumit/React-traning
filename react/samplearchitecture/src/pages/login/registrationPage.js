import React from "react";
import axios from "axios";
import config from "../../config";

class RegistrationPage extends React.Component {
  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        // handle success
        console.log(res.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return <div>RegistrationPage</div>;
  }
}

export default RegistrationPage;
