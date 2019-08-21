import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import DashboardContainer from "./container/dashboardContainer";
import ResourceNotFoundContainer from "./container/resourceNotFoundContainer";
import axios from "axios";

import LoginContainer from "./container/loginContainer";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "Auth Token";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.interceptors.request.use(
  request => {
    //Edit the request
    console.log("Request interceptor:", request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    //Edit the response
    console.log("response interceptor:", response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

class App extends React.Component {
  // componentDidMount() {
  //   console.log("AppJs mounted.");
  // }

  // componentWillMount() {
  //   console.log("AppJs will mount.");
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={DashboardContainer} />
          <Route path="/Dashboard" component={DashboardContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route component={ResourceNotFoundContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
