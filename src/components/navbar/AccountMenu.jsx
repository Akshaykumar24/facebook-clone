import React from "react";
import { ReactComponent as DarkModeIcon } from "../../Icons/darkMode.svg";
import { ReactComponent as LogoutIcon } from "../../Icons/logout.svg";
import { ReactComponent as SettingIcon } from "../../Icons/setting.svg";
import Switch from "@mui/material/Switch";
import "../../styles/SideBar/SideBar.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { outUser } from "../../redux/auth/action";

const AccountMenu = ({ themeToggler, checked }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const history = useHistory();
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem("login");
    dispatch(outUser());
    history.push("/login");
  };

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
        <Switch
          value=""
          checked={checked}
          onClick={themeToggler}
          inputProps={{ "aria-label": "" }}
          size="medium"
        />
      </div>
      <div className="darkModeBox flexBox" onClick={logOut}>
        <div className="logoutIconWrap flexBox">
          <LogoutIcon />
        </div>
        <p>Log Out</p>
      </div>
      <small>
        Privacy · Terms · Advertising · Ad choices · Cookies · · Facebook © 2021
      </small>
    </div>
  );
};

export default AccountMenu;
