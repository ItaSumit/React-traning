import React from "react";
import CreaditCardPage from "../pages/dashboard/creaditCardPage";
import LiquidityPage from "../pages/dashboard/liquidityPage";
import { Link, Redirect } from "react-router-dom";

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log("DashboardContainer mounted.");
  }

  componentWillMount() {
    console.log("DashboardContainer will mount.");
  }

  validateUserInteractionHandler = () => {
    console.log("Confirmed", this.props);
    // this.props.history.push("/login");
    this.props.history.push({ pathname: "/login", state: { userID: "0008" } });
  };

  state = {
    open: false
  };
  render() {
    return (
      <div>
        <Link
          to={{
            pathname: "/login",
            state: { userID: "0007" },
            search: `name=batman`
          }}
        >
          Login Parameterised
        </Link>
        <button
          onClick={() => {
            this.setState({ open: true });
          }}
        >
          Redirect to Login
        </button>
        {this.state.open ? <Redirect to="/login" /> : null}
        <button onClick={this.validateUserInteractionHandler}>
          Go to Login
        </button>
        {/* <CreaditCardPage /> */}
        <LiquidityPage />
      </div>
    );
  }
}

export default DashboardContainer;
