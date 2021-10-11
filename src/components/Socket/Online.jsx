import React from "react";
import styled from "styled-components";
const Online = () => {
  return (
    <Conve>
      <img
        src="https://avatars.dicebear.com/api/micah/deependra.svg"
        alt="prof"
      />
      <div></div>
      <p>User Name</p>
    </Conve>
  );
};

export default Online;

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
  > div {
    position: relative;
    width: 10px;
    height: 10px;
    left: -20px;
    top: 15px;
    border-radius: 50%;
    background-color: rgb(24, 119, 242);
  }
`;
