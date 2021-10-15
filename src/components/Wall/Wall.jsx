import React from "react";
import { Link } from "react-router-dom";

const Wall = () => {
  return (
    <div>
      Welcome to Your Wall
      <Link to="/friends">Friends</Link>
      Go to home
      <Link to="/home">home</Link>
      <Link to="/profile">profile</Link>

    </div>
  );
};

export default Wall;
