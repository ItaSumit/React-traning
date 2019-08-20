import React from "react";
import LoginPage from "../pages/login/loginPage";
import RegistrationPage from "../pages/login/registrationPage";

class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <LoginPage />
        <RegistrationPage />
      </div>
    );
  }
}

export default LoginContainer;
