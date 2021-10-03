import React, { useState, useEffect } from "react";
import "../../styles/Navbar/Navbar.css";
import { ReactComponent as SearchIcon } from "../../Icons/search.svg";
import { ReactComponent as MainLogo } from "../../Icons/main-logo.svg";
import { ReactComponent as FavIcon } from "../../Icons/fav.svg";
import { ReactComponent as HomeIcon } from "../../Icons/home.svg";
import { ReactComponent as UsersIcon } from "../../Icons/users.svg";
import { ReactComponent as VideoIcon } from "../../Icons/video.svg";
import { ReactComponent as CreateIcon } from "../../Icons/create.svg";
import { ReactComponent as MessageIcon } from "../../Icons/message.svg";
import { ReactComponent as NotificationIcon } from "../../Icons/notification.svg";
import { ReactComponent as DownArrowIcon } from "../../Icons/downArrow.svg";
import IconWrapper from "./IconWrapper";
import IconWrapperCircle from "./IconWrapperCircle";
import AccountMenu from "./AccountMenu";
import Notification from "./Notification";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getData } from '../../utils/localStorage'
import axios from "axios"
import { url } from "../../utils/url";
const NavBar = ({ themeToggler, checked, menu, setMenu }) => {
  const [account, setAccount] = React.useState(false);
  const [notification, setNotification] = React.useState(false);

  const state = useSelector((state) => state);
  const [p, setP] = useState(getData("userData").user
    ? getData("userData").user
    : getData("userData").userOnline)

  // for notifications
  const [not, setNot] = useState(null);
  useEffect(() => {
    axios.get(`${url}/api/notification/${p._id}`).then((res) => {
      console.log(res, "This Notify");
      return setNot(res.data.msg);
    });
  }, [p._id]);

  const handleMenu = () => {
    console.log(menu, "menu");
    setMenu((prev) => !prev);
  };

  const changeState = (p) => {
    if (account && p === setAccount) {
      return setAccount(false);
    }
    if (notification && p === setNotification) {
      return setNotification(false);
    }
    setAccount(false);
    setNotification(false);
    p(true);
  };

  return (
    <>
      <div className="navBarContainer flexBox">
        <div className="navBarLogo flexBox">
          <Link to="/">
            <MainLogo />
          </Link>
          <div className="navBarSearchBox flexBox">
            <div className="mainSearchIcon flexBox">
              <SearchIcon />
            </div>

            <input
              type="text"
              placeholder="Search Facebook"
              className="navBarSearchBoxInput"
            />
          </div>
        </div>
        <div className="navBarMenu" onClick={handleMenu}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="navBarMainHeader flexBox">
          <IconWrapper path="/" title="Home">
            <Link to="/">
              <HomeIcon />
            </Link>
          </IconWrapper>
          <IconWrapper path="/videos" title="Videos">
            <Link to="/reels">
              <VideoIcon />
            </Link>
          </IconWrapper>
          <IconWrapper path="/friends" title="Friends">
            <Link to="/friends">
              <UsersIcon />
            </Link>
          </IconWrapper>
          <IconWrapper path="/favorites" title="Favorites">
            <Link to="/favourites">
              <FavIcon />
            </Link>
          </IconWrapper>
        </div>
        <div className="navBarUserBox flexBox">
          <div className="userProfileCard flexBox">
            <img
              src={
                p.profile === undefined
                  ? `https://avatars.dicebear.com/api/micah/${p.first_name}.svg`
                  : p.profile
              }
              alt="profile"
            />
            <p>{p.first_name ? p.first_name : "User"}</p>
          </div>
          <IconWrapperCircle title="Create">
            <CreateIcon />
          </IconWrapperCircle>
          <IconWrapperCircle title="Messenger">
            <MessageIcon />
          </IconWrapperCircle>
          <IconWrapperCircle title="Notifications">
            <NotificationIcon onClick={() => changeState(setNotification)} />
          </IconWrapperCircle>
          <IconWrapperCircle title="Account">
            <DownArrowIcon
              onClick={() => changeState(setAccount)}
            ></DownArrowIcon>
          </IconWrapperCircle>
        </div>
      </div>
      {account && <AccountMenu themeToggler={themeToggler} checked={checked} />}
      {notification && <Notification p={p} not={not} />}
    </>
  );
};
export default NavBar;
