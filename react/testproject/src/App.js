import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import LoginRegisterPage from "./pages/login/loginRegisterPage";
import DashboardPage from "./pages/dashboard/dashboardPage";
// import TablePage from "./pages/tableData/tablePage";

import LoginContainer from "./containers/loginContainer";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/login" component={LoginRegisterPage} />
        <Route path="/dashboard" component={DashboardPage} />
        {/* <Route path="/tablePage" component={TablePage} /> */}
      </Switch>
    </Router>
  );
};

export default App;
