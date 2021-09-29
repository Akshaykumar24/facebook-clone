import React from "react";
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

const NavBar = () => {

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
            <NotificationIcon />
          </IconWrapperCircle>
          <IconWrapperCircle title="Account">
            <DownArrowIcon />
          </IconWrapperCircle>
        </div>
      </div>
    </>
  );
};
export default NavBar;
