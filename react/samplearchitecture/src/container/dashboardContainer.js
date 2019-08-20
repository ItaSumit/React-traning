import React from "react";
import CreaditCardPage from "../pages/dashboard/creaditCardPage";
import LiquidityPage from "../pages/dashboard/liquidityPage";

class DashboardContainer extends React.Component {
  render() {
    return (
      <div>
        {/* <CreaditCardPage /> */}
        <LiquidityPage />
      </div>
    );
  }
}

export default DashboardContainer;
