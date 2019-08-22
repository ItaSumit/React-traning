import React from "react";
import LoginContainer from "../../containers/loginContainer";
import RegisterContainer from "../../containers/registerContainer";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const LoginPage = props => {
  const match = props.match;
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/login`} component={LoginContainer} />
        <Route path={`${match.path}/register`} component={RegisterContainer} />
      </Switch>
    </div>
  );
};

export default LoginPage;
