import React from "react";
import ActiveDot from "./ActiveDot";

function SideBarContent({ src, label, active }) {

  return (
    <div className="sideBarContentContainer flexBox"  >
      <div className="sideBarContentUserImageBox">
        <img className="sideBarContentImage" src={src} alt={{ label }} />
        {active && <ActiveDot />}
      </div>
      <div className="sideBarContentLabel">{label}</div>
    </div>
  );
}

export default SideBarContent;
