import React, { useEffect } from "react";
import SideBarContent from "./SideBarContent";
import { ReactComponent as SearchIcon } from "../../Icons/search.svg";
import "../../styles/SideBar/SideBar.css";
import axios from "axios";
import { url } from "../../utils/url";

const ActiveContacts = ({ id }) => {
  const [data, setData] = React.useState([true]);
  useEffect(() => {
    axios.get(`${url}/api/user/all/${id}`).then(({ data }) => {
      console.log(data, "Here");
      return setData(data.user);
    });
  }, [id]);
  return (
    <div className="sideBarContainer">
      <div className="activeContactHeader">
        <h3>People You May Know</h3>
        <SearchIcon />
      </div>
      {data.map((p) => (
        <div className="flexBox sideBarContentLink">
          <SideBarContent
            label={p.first_name}
            src={
              p.profile === undefined || ""
                ? `https://avatars.dicebear.com/api/micah/${p.first_name}.svg`
                : p.profile
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ActiveContacts;
