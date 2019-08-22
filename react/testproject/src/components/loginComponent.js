import React, { useState } from "react";
import "./loginCss.css";
import { Link } from "react-router-dom";

const LoginComponent = props => {
  return (
    <div className="container">
      <div className="heading">Login</div>
      <div className="inputs">
        <input
          name="userName"
          value={props.loginData.userName}
          onChange={e => {
            props.setLoginData({
              ...props.loginData,
              userName: e.target.value
            });
          }}
        />
        <br />
        <input
          name="password"
          value={props.loginData.password}
          onChange={e => {
            props.setLoginData({
              ...props.loginData,
              password: e.target.value
            });
          }}
        />
      </div>
      <div>
        <button style={{ margin: "10px" }} onClick={props.loginHandler}>
          Submit
        </button>
        <button style={{ margin: "10px" }} onClick={props.cancelHandler}>
          Cancel
        </button>
      </div>
      <Link to="/login/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default LoginComponent;
