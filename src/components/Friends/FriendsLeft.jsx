import React from "react";
import styled from "styled-components";

const FriendsLeft = ({
  suggest,
  setSuggest,
  find,
  setFind,
  birth,
  setBirth,
  pendingRequest,
  setPendingRequest,
  sentRequest,
  setSentRequest,
}) => {
  const changeState = (p) => {
    setSuggest(false);
    setFind(false);
    setBirth(false);
    setSentRequest(false);
    setPendingRequest(false);
    p(true);
  };

  return (
    <div>
      {/* {!suggest && !find && !birth && !request && ( */}
      <ForAll>
        <h1 style={{ padding: "18px" }}>Friends</h1>
        <LeftDiv
          style={{ backgroundColor: pendingRequest ? "#cbcbff" : "white" }}
          onClick={() => changeState(setPendingRequest)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/47/47768.png"
            alt="friendsIcon"
          />
          Friend Requests
        </LeftDiv>
        <LeftDiv
          style={{ backgroundColor: sentRequest ? "#cbcbff" : "white" }}
          onClick={() => changeState(setSentRequest)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/47/47768.png"
            alt="friendsIcon"
          />
          Sent Requests
        </LeftDiv>
        <LeftDiv
          style={{ backgroundColor: suggest ? "#cbcbff" : "white" }}
          onClick={() => changeState(setSuggest)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/681/681494.png"
            alt="friendsIcon"
          />
          Suggestions
        </LeftDiv>
        <LeftDiv
          style={{ backgroundColor: find ? "#cbcbff" : "white" }}
          onClick={() => changeState(setFind)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/681/681494.png"
            alt="friendsIcon"
          />
          Friends
        </LeftDiv>
        <LeftDiv
          style={{ backgroundColor: birth ? "#cbcbff" : "white" }}
          onClick={() => changeState(setBirth)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/3159/3159518.png"
            alt="friendsIcon"
          />
          Birthdays
        </LeftDiv>
      </ForAll>
      {/* )} */}
      {/* {request && (
        <ForAll>
          <h2 onClick={() => setRequest(false)}>Friends Requests</h2>
        </ForAll>
      )}
      {suggest && (
        <ForAll>
          <h2 onClick={() => setSuggest(false)}>Suggestions</h2>
        </ForAll>
      )}
      {find && (
        <ForAll>
          <h2 onClick={() => setFind(false)}>All Friends</h2>
        </ForAll>
      )}
      {birth && (
        <ForAll>
          <h2 onClick={() => setBirth(false)}>Birthdays</h2>
        </ForAll>
      )} */}
    </div>
  );
};

export default FriendsLeft;

const ForAll = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 50px;
  height: 100vh;
  /* z-index: -2; */
  width: 350px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  background-color: var(--primary-background-color);
  > h1 {
    font-size: 28px;
    padding-left: 20px;
  }
`;

const LeftDiv = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px 8px;
  font-size: 18px;
  font-weight: 550;
  align-items: center;
  display: flex;
  border-radius: 5px;
  :hover {
    background-color: rgb(242, 242, 242);
  }
  > img {
    width: 30px;
    padding: 4px;
    border-radius: 50%;
    background-color: #cbcbff;
    margin-right: 10px;
  }
`;
