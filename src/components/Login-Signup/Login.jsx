import React from "react";
import styled from "styled-components";

const Login = ({ handleLogin, handleLoginForm, email, password }) => {
  return (
    <Logs>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        name="email"
        onChange={(e) => handleLoginForm(e)}
      />
      <input
        type="password"
        placeholder="Your Password"
        value={password}
        name="password"
        onChange={(e) => handleLoginForm(e)}
      />
      <button onClick={handleLogin}>Log-In</button>
    </Logs>
  );
};

export default Login;

const Logs = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  line-height: 1.34;
  > input {
    font-size: 17px;
    padding: 14px 16px;
    width: 330px;
    height: 22px;
    margin: 7px auto;
    line-height: 1.34;
    border-radius: 5px;
    border: 1px solid rgb(212, 212, 212);
  }
  > input:focus {
    outline: 1px solid #1877f2;
  }
  > button {
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 48px;
    padding: 0 16px;
    width: 366px;
    margin: 7px 0;
    font-weight: 700;
    color: #fff;
  }
  > button:hover {
    background-color: rgb(22, 111, 229);
  }
`;
