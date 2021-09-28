import React from "react";

const Login = ({ handleLogin, handleLoginForm, email, password }) => {
  return (
    <div>
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
    </div>
  );
};

export default Login;
