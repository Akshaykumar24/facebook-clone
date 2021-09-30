import React from "react";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Story from "./components/Story/Story.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Story />
    </div>
  );
};

export default App;
