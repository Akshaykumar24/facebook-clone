import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { url } from "../../utils/url";
const Conversation = ({ c, me }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //console.log()
    const friend = c.members.find((m) => m !== me._id);
    const getUser = async () => {
      try {
        axios.get(`${url}/api/user/${friend}`).then(({ data }) => {
          return setUser(data.user);
        });
      } catch (err) {
      }
    };
    getUser();
  }, [c, me]);

  return (
    <Conve>
      <img
        src={
          user?.profile
            ? user.profile
            : `https://avatars.dicebear.com/api/micah/${user ? user.first_name : "rushi"
            }.svg`
        }
        alt="prof"
      />
      <p>{user ? user.first_name : "User Name"}</p>
    </Conve>
  );
};

export default Conversation;
const Conve = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  > img {
    width: 70px;
    height: 70px;
    padding: 10px;
    border-radius: 50%;
  }
  > p {
    font-size: 18px;
  }
  :hover {
    background-color: var(--background-gray-color);
  }
`;
