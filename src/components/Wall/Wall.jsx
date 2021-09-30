import React from "react";
import { Link } from "react-router-dom";

const Wall = () => {
  return (
    <div>
      Welcome to Your Wall
      <Link to="/friends">Friends</Link>
      <Link to="/home">home</Link>

    </div>
  );
};

export default Wall;
