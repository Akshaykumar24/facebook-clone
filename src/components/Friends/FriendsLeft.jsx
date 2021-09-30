import React from "react";
import styled from "styled-components";

const FriendsLeft = ({
  suggest,
  setSuggest,
  find,
  setFind,
  birth,
  setBirth,
  request,
  setRequest,
}) => {
  const changeState = (p) => {
    setSuggest(false);
    setFind(false);
    setBirth(false);
    setRequest(false);
    p(true);
  };

  return (
    <div>
      {!suggest && !find && !birth && !request && (
        <ForAll>
          <h2>Friends</h2>
          <div onClick={() => changeState(setRequest)}>Friend Requests</div>
          <div onClick={() => changeState(setSuggest)}>Suggestions</div>
          <div onClick={() => changeState(setFind)}>All Friends</div>
          <div onClick={() => changeState(setBirth)}>Birthdays</div>
        </ForAll>
      )}
      {request && (
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
      )}
    </div>
  );
};

export default FriendsLeft;

const ForAll = styled.div`
  position: fixed;
  left: 0;
  top: 20px;
  height: 100vh;
  /* z-index: -2; */
  width: 350px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  background-color: var(--primary-background-color);
`;
