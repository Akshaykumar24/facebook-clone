import React from "react";
import Tooltip from "@mui/material/Tooltip";

function IconWrapperCircle({ children, title }) {

  return (
    <div style={{ cursor: "pointer" }} className="iconWrapper-2 flexBox">
      <Tooltip title={title}>{children}</Tooltip>
    </div>
  );
}
export default IconWrapperCircle;
