import axios from "axios";
import React, { useState, useEffect } from "react";
import { ReactComponent as DotsIcon } from "../../Icons/dots.svg";
import { url } from "../../utils/url";
import NotifyCard from "./NotifyCard";

function Notifications({ notifications, uid, p, not }) {
  // const [not, setNot] = useState(null);
  // useEffect(() => {
  //   axios.get(`${url}/api/notification/${p._id}`).then((res) => {
  //     console.log(res, "This Notify");
  //     return setNot(res.data.msg);
  //   });
  // }, [p._id]);

  return (
    <div className="notificationsContainer" style={{ maxHeight: "700px" }}>
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
      {not.map((p) => {
        return <NotifyCard p={p} key={p._id} />;
      })}
      <div className="notificationsBox flexBox scroll">
        <p className="noNotifications">No notifications</p>
      </div>
    </div>
  );
}

export default Notifications;
