import React from "react";
import LoginPage from "../pages/login/loginPage";
import RegistrationPage from "../pages/login/registrationPage";
import { Route, Switch, Link } from "react-router-dom";

class LoginContainer extends React.Component {
  render() {
    console.log(this.props);
    const match = this.props.match;

    return (
      <div>
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
