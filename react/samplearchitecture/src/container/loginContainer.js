import React from "react";
import LoginPage from "../pages/login/loginPage";
import RegistrationPage from "../pages/login/registrationPage";
import { Route, Switch, Link } from "react-router-dom";

class LoginContainer extends React.Component {
  render() {
    console.log(this.props);
    const match = this.props.match;
    console.log(this.props.location.search);

    const params = new URLSearchParams(this.props.location.search);
    console.log(params.get("name"));
    return (
      <div>
        {/* <p>{this.props.location.state.userID}</p> */}
        <Link to="/dashboard">Dashboard</Link>
        <Switch>
          <Route path={`${match.path}/login`} component={LoginPage} />

          <Route path={`${match.path}/register`} component={RegistrationPage} />
        </Switch>
      </div>
    );
  }
}

export default LoginContainer;
