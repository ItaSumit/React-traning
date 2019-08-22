import React from "react";
import { Link } from "react-router-dom";
import "./loginCss.css";
import signup from "../signUp.png";

const RegisterComponent = props => {
  return (
    <div className="container">
      <div className="heading">Register</div>
      <img style={{ width: "40px", height: "40px" }} src={signup} />
      <br />
      <div className="inputs">
        <input
          name="userName"
          value={props.registerData.userName}
          onChange={e => {
            props.setRegisterData({
              ...props.registerData,
              userName: e.target.value
            });
          }}
        />
        <br />
        <input
          name="password"
          value={props.registerData.password}
          onChange={e => {
            props.setRegisterData({
              ...props.registerData,
              password: e.target.value
            });
          }}
        />
        <br />
        <input
          name="confirmPassword"
          value={props.registerData.confirmPassword}
          onChange={e => {
            props.setRegisterData({
              ...props.registerData,
              confirmPassword: e.target.value
            });
          }}
        />
      </div>
      <div>
        <button style={{ margin: "10px" }} onClick={props.registerHandler}>
          Submit
        </button>
        <button style={{ margin: "10px" }} onClick={props.cancelHandler}>
          Cancel
        </button>
      </div>
      <Link to="/login/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default RegisterComponent;
