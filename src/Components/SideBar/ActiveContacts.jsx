import React from "react";
import SideBarContent from "./SideBarContent";
import { ReactComponent as SearchIcon } from "../../Icons/search.svg";
import { ReactComponent as VedioIcon } from "../../Icons/videoCallIcon.svg";
import "../../styles/SideBar/SideBar.css";

const ActiveContacts = () => {
  const [activeState, setActiveState] = React.useState(true);
  return (
    <div className="sideBarContainer">
      <div className="activeContactHeader">
        <h3>Contacts</h3>
        <SearchIcon />
      </div>
      <div className="flexBox sideBarContentLink">
        <SideBarContent
          label="Vaibhav"
          src="https://lh3.googleusercontent.com/a-/AOh14GhRn5Z0k4yIPKiZRdd8cTmkzDbqswy-A1yJjMTMBw=s576-p-rw-no"
          active={activeState}
        />
      </div>
    </div>
  );
};

export default ActiveContacts;
