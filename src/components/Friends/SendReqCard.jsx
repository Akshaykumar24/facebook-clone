import axios from "axios";
import React from "react";
import styled from "styled-components";
import { url } from "../../utils/url";

const SendReqCard = ({ p, id, update, data }) => {
  const cancelReq = () => [
    axios
      .post(`${url}/api/user/cancelRequest/${id}`, {
        id: p._id,
      })
      .then(update(data, p._id)),
  ];

  return (
    <Known>
      <img
        src={
          p.profile === undefined
            ? `https://avatars.dicebear.com/api/micah/${p.first_name}.svg`
            : p.profile
        }
        alt="profile"
      />
      <h2>{p.first_name}</h2>
      <button onClick={cancelReq}>Cancel Request</button>
    </Known>
  );
};

export default SendReqCard;

const Known = styled.div`
  max-width: 250px;
  min-width: 200px;
  /* height: 350px; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid black;
  background-color: var(--primary-background-color);
  border-radius: max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px;
  padding-bottom: 7px;
  > h2 {
    padding: 12px 12px 24px;
    margin: 0;
    font-size: 18px;
  }
  > button {
    width: 90%;
    margin: 3px auto 5px;
    height: 32px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
  }
  > :nth-child(3) {
    background-color: rgb(255, 195, 195);
    color: rgb(255, 31, 31);
  }
  > :nth-child(3):hover {
    background-color: rgb(219, 231, 242);
  }
  > :nth-child(4):hover {
    background-color: rgb(216, 218, 223);
  }
`;
