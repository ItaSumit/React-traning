import React, { useState } from "react";

import LoginComponent from "../components/loginComponent";
import userData from "../data/userData.json";

const LoginContainer = props => {
  const [loginData, setLoginData] = useState({ userName: "", password: "" });

  const loginHandler = () => {
    let isMatching = false;
    if (loginData.userName.length < 6) {
      alert("User name should have minimum 6 characters.");
      return;
    }

    for (let i = 0; i < userData.length; i++) {
      let user = userData[i];
      if (
        user.username == loginData.userName &&
        user.password == loginData.password
      ) {
        isMatching = true;

        break;
      }
    }
    console.log(isMatching);
    if (isMatching) {
      localStorage.setItem("user", JSON.stringify(loginData));
      props.history.push("/dashboard");
    } else {
    }
  };

  const cancelHandler = () => {
    localStorage.removeItem("user");
    setLoginData({ userName: "", password: "" });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <LoginComponent
        loginHandler={loginHandler}
        loginData={loginData}
        setLoginData={setLoginData}
        cancelHandler={cancelHandler}
      />
    </div>
  );
};

export default LoginContainer;
