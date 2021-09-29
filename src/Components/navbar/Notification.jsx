import React from "react";
import { ReactComponent as DotsIcon } from "../../Icons/dots.svg";

function Notifications({ notifications, uid }) {
  return (
    <div className="notificationsContainer">
      <div className="notificationsHeader flexBox">
        <h1>Notifications</h1>
        <div className="notificationMenuBox flexBox">
          <DotsIcon />
        </div>
      </div>
      <div className="notificationsHeader flexBox">
        <h3>New</h3>
        <div className="notificationMenuBox flexBox">
          <p>See All</p>
        </div>
          </div>
          <div className="notificationsBox flexBox scroll">
               <p className="noNotifications">No notifications</p>
        </div>
    </div>
  );
}

export default Notifications;
