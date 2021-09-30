import React from "react";
import { Link } from "react-router-dom";

const Wall = () => {
  return (
    <div>
      Welcome to Your Wall
      <Link to="/profile">profile</Link>
    </div>
  );
};

export default Wall;
