import React from "react";
import DashboardContainer from "./container/dashboardContainer";
// import LoginContainer from "./container/loginContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <DashboardContainer />
        {/* <LoginContainer /> */}
      </div>
    );
  }
}

export default App;
