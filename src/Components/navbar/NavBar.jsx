import React from "react";
import "../../styles/Navbar/Navbar.css"
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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({menu, setMenu}) => {
  
  const [account, setAccount] = React.useState(false);
  const [notification, setNotification] = React.useState(false);



  const handleMenu = () => {
    console.log(menu,'menu');
      setMenu((prev) => !prev)    
  }
  

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
          <MainLogo />
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
        <div className="navBarMenu" onClick={handleMenu} >
           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
      
        </div>
        <div className="navBarMainHeader flexBox">
          <IconWrapper path="/" title="Home">
            <HomeIcon />
          </IconWrapper>
          <IconWrapper path="/videos" title="Videos">
            <VideoIcon />
          </IconWrapper>
          <IconWrapper path="/friends" title="Friends">
            <UsersIcon />
          </IconWrapper>
          <IconWrapper path="/favorites" title="Favorites">
            <FavIcon />
          </IconWrapper>
        </div>
        <div className="navBarUserBox flexBox">
          <div className="userProfileCard flexBox">
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14GhRn5Z0k4yIPKiZRdd8cTmkzDbqswy-A1yJjMTMBw=s576-p-rw-no"
              alt="profile"
            />
            <p>Vaibhav</p>
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
      {account && <AccountMenu />}
      {notification && <Notification />}
          
    </>
  );
};
export default NavBar;
