import React from "react";
import styled from "styled-components";

const KnowCard = ({ p }) => {
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
      <button>Add Friend</button>
      <button>Remove</button>
    </Known>
  );
};

export default KnowCard;

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
    padding: 12px;
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
    background-color: rgb(231, 243, 255);
    color: rgb(74, 126, 230);
  }
  > :nth-child(3):hover {
    background-color: rgb(219, 231, 242);
  }
  > :nth-child(4):hover {
    background-color: rgb(216, 218, 223);
  }
`;
