import React from "react";
import SideBar from "../SideBar/SideBar";
import ActiveContacts from "../SideBar/ActiveContacts";
import "../../styles/Home/Home.css";
import Story from "../Story/Story";

const Home = () => {
  return (
    <div className="MainContainer">
      <div className="mainLeftSidebarContainer">
        <SideBar />
      </div>
      <div className="mainPostsContainer scroll">
        <Story />
        {/* <NewPost /> */}
      </div>
      <div className="mainRightSidebarContainer scroll">
        <ActiveContacts />
      </div>
    </div>
  );
};

export default Home;
