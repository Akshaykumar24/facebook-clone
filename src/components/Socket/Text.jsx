import React from "react";
import styled from "styled-components";
import { format } from "timeago.js";
const Text = ({ m, my }) => {
  return (
    <>
      <Texted>
        <div style={{ flexDirection: my ? "row-reverse" : "row" }}>
          <img
            src={
              m.sender.profile
                ? m.sender.profile
                : `https://avatars.dicebear.com/api/micah/${m.sender.first_name}.svg`
            }
            alt="prof"
          />
          <p
            style={{
              backgroundColor: my ? "rgb(228, 230, 235)" : "#4093ff",
              color: my ? "rgb(5,5,5)" : "white",
            }}
          >
            {m.message}
          </p>
        </div>
        <div style={{ justifyContent: my ? "right" : "left" }}>
          <h6>
            {format(m.createdAt)}
            {m.first_name}
          </h6>
        </div>
      </Texted>
    </>
  );
};

export default Text;

const Texted = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    > img {
      width: 50px;
      height: 50px;
      margin: 0 10px;
      border-radius: 50%;
    }
  }
  h6 {
    font-size: 12px;
    padding: 8px 12px;
  }
  p {
    font-size: 18px;
    max-width: 60%;
    padding: 10px;
    border-radius: 20px;
  }
`;
