import React from "react";
import SideBarContent from "./SideBarContent";
import { Link } from "react-router-dom";
import "../../styles/SideBar/SideBar.css";

function LeftDownBar() {
  return (
    <div className="sideBarContainer">
      <div className="sideBarLinksContainer">
        <div className="downBarHeading">Your ShortCuts</div>
        <Link className="flexBox sideBarContentLink">
          <SideBarContent src={"/Images/saga.jpeg"} label="Candy Crush Saga" />
        </Link>
        <Link className="flexBox sideBarContentLink">
          <SideBarContent src={"/Images/masai.jpg"} label="Masai School" />
        </Link>
        <Link className="flexBox sideBarContentLink">
          <SideBarContent src={"/Images/8Ball.png"} label="8 Ball Pool" />
        </Link>
        <Link className="flexBox sideBarContentLink">
          <SideBarContent src={"/Images/chess.jpg"} label="Chess" />
        </Link>
        <small>
          Privacy · Terms · Advertising · Ad choices <br /> Cookies · More ·
          Facebook © 2021
        </small>
      </div>
    </div>
  );
}

export default LeftDownBar;
