import React from "react";
import CreaditCardPage from "../pages/dashboard/creaditCardPage";
import LiquidityPage from "../pages/dashboard/liquidityPage";
import { Link } from "react-router-dom";

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log("DashboardContainer mounted.");
  }

  componentWillMount() {
    console.log("DashboardContainer will mount.");
  }
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>

        {/* <CreaditCardPage /> */}
        <LiquidityPage />
      </div>
    );
  }
}

export default DashboardContainer;
