import React from "react";
import SideBar from "../SideBar/SideBar";
import ActiveContacts from "../SideBar/ActiveContacts";
import "../../styles/Home/Home.css";
import Story from "../../Story/Story";
import Navbar from "../../navbar/NavBar";
import Drawer from "@mui/material/Drawer";

const Home = () => {
  const [menu, setMenu] = React.useState(false);

  return (
    <>
      <Navbar setMenu={setMenu} menu={setMenu} />
      <div className="MainContainer">
        {menu && (
          <Drawer
            open={menu}
            anchor={"top"}
            BackdropProps={{ invisible: true }}
          >
            <SideBar />
          </Drawer>
        )}
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
    </>
  );
};

export default Home;
