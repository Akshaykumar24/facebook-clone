import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "timeago.js";
import { url } from "../../utils/url";

const NotifyCard = ({ p }) => {
  console.log(p, "at NotifyCard");
  const [n, setN] = useState(p.read);
  const readMe = () => {
    axios.patch(`${url}/api/notification/${p._id}`).then(setN(true));
  };
  return (
    <Noti
      style={{
        backgroundColor: n.read === true ? "white" : "rgb(227, 236, 255)",
      }}
      onClick={readMe}
    >
      <img
        src={
          p.from.profile
            ? p.from.profile
            : `https://avatars.dicebear.com/api/micah/${p.from.first_name}.svg`
        }
        alt="profile"
      />
      <div>
        <h2>{p.from.first_name + " " + p.from.last_name}</h2>
        <p>{p.message}</p>
      </div>
      <p>{format(p.at)}</p>
    </Noti>
  );
};

export default NotifyCard;

const Noti = styled.div`
  width: 110%;
  margin-left: -14px;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  > :last-child {
    flex: 1;
    font-size: 12px;
  }
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  > div {
    padding: 0 7px;
    flex: 2.5;
    display: flex;
    flex-direction: column;
  }
`;

// var locale = function (number, index, totalSec) {
//   // number: the time ago / time in number;
//   // index: the index of array below;
//   // totalSec: total seconds between date to be formatted and today's date;
//   return [
//     ["just now", "just now"],
//     ["%s seconds ago", "%s sec ago"],
//     ["1 minute ago", "1 min ago"],
//     ["%s minutes ago", "%s m ago"],
//     ["1 hour ago", "1 hr ago"],
//     ["%s hours ago", "%s hrs ago"],
//     ["1 day ago", "1 day ago"],
//     ["%s days ago", "%s days ago"],
//     ["1 week ago", "1 week ago"],
//     ["%s weeks ago", "%s weeks ago"],
//     ["1 month ago", "1 month"],
//     ["%s months ago", "%s months ago"],
//     ["1 year ago", "1 year ago"],
//     ["%s years ago", "%s years ago"],
//   ][index];
// };
// timeago.register("pt_BR", locale);
