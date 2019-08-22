import React, { useState } from "react";
import RegisterComponent from "../components/registerComponent";

const RegisterContainer = props => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    password: "",
    confirmPassword: ""
  });
  const registerHandler = () => {
    if (registerData.userName.length < 6) {
      alert("User name should have minimum 6 characters.");
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      alert("Password and confirm password should be same.");
      return;
    }

    console.log("You have registered succefully.");
  };

  const cancelHandler = () => {
    setRegisterData({ userName: "", password: "", confirmPassword: "" });
  };
  return (
    <div>
      <RegisterComponent
        registerData={registerData}
        setRegisterData={setRegisterData}
        registerHandler={registerHandler}
        cancelHandler={cancelHandler}
      />
    </div>
  );
};

export default RegisterContainer;
