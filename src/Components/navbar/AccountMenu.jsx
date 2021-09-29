import React from "react";
import { ReactComponent as DarkModeIcon } from "../../Icons/darkMode.svg";
import { ReactComponent as LogoutIcon } from "../../Icons/logout.svg";
import { ReactComponent as SettingIcon } from "../../Icons/setting.svg";
import Switch from "@mui/material/Switch";

const AccountMenu = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="accountMenuContainer">
      <div className="AccountMenuUserProfileCard flexBox">
        <img src={"/Images/userProfile_icon.png"} alt="Profile" />
        <div>
          <p>vaibhav</p>
          <small>See your profile</small>
        </div>
      </div>
      <hr />
      <div className="darkModeBox flexBox">
        <div className="logoutIconWrap flexBox">
          <SettingIcon />
        </div>
        <p>Settings & Privacy</p>
      </div>
      <div className="darkModeBox flexBox">
        <DarkModeIcon />
        <p>Dark Mode</p>
        <Switch {...label} defaultChecked />
      </div>
      <div className="darkModeBox flexBox">
        <div className="logoutIconWrap flexBox">
          <LogoutIcon />
        </div>
        <p>Log Out</p>
      </div>   
      <small>Privacy  · Terms  · Advertising  · Ad choices   · Cookies  ·   · Facebook © 2021</small>
    </div> 
  );
};

export default AccountMenu;
