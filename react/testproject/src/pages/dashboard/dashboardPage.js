import React from "react";
import LoginContainer from "../../containers/loginContainer";
import RegisterContainer from "../../containers/registerContainer";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const DashboardPage = props => {
  return (
    <div>
      Dashboard
      {/* <Link to="/dashboard">
        <button>Login</button>
       </Link>

      <Link to="/login/login">
        <button>Login</button>
      </Link> */}
      <Switch>
        <Route path={`/login`} component={LoginContainer} />
        <Route path={`/register`} component={RegisterContainer} />
      </Switch>
    </div>
  );
};

export default DashboardPage;
