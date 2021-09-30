import React, { useEffect, useState } from "react";
import FriendsLeft from "./FriendsLeft";
import KnowCard from "./KnowCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SendReqCard from "./SendReqCard";
import AcceptCard from "./AcceptCard";
import axios from "axios";
import { url } from "../../utils/url";
import FriendMessageCard from "./FriendMessageCard";

const p = {
  first_name: "Akshay",
  profile:
    "https://tse1.mm.bing.net/th?id=OIP.ZzK9QmxgtHFysccpbohqYAHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112",
};

const FriendsAll = () => {
  const [suggest, setSuggest] = useState(false);
  const [find, setFind] = useState(false);
  const [birth, setBirth] = useState(false);
  const [pendingRequest, setPendingRequest] = useState(false);
  const [sentRequest, setSentRequest] = useState(false);
  const [data, setData] = useState([]);

  const state = useSelector((state) => state);
  const friends = state.auth.user.friends;
  const friendRequestSent = state.auth.user.friendRequestSent;
  const friendRequestRecieved = state.auth.user.friendRequestRecieved;

  const id = state.auth.user._id;

  useEffect(() => {
    if (find) {
      setData(friends);
    }
  }, [find, friends]);
  useEffect(() => {
    if (pendingRequest) {
      setData(friendRequestRecieved);
    }
  }, [pendingRequest, friendRequestRecieved]);

  useEffect(() => {
    if (sentRequest) {
      setData(friendRequestSent);
    }
  }, [sentRequest, friendRequestSent]);

  useEffect(() => {
    if (suggest) {
      axios.get(`${url}/api/user/all/${id}`).then(({ data }) => {
        //console.log(data);
        return setData(data.user);
      });
    }
  }, [suggest, id]);
  const update = (arr, id) => {
    setData(arr.filter((i) => i._id !== id));
  };
  return (
    <div>
      All Friends Can be found here
      <FriendsLeft
        suggest={suggest}
        pendingRequest={pendingRequest}
        sentRequest={sentRequest}
        find={find}
        birth={birth}
        setSuggest={setSuggest}
        setPendingRequest={setPendingRequest}
        setSentRequest={setSentRequest}
        setFind={setFind}
        setBirth={setBirth}
      />
      {find && (
        <Cont>
          {data.map((p) => (
            <FriendMessageCard p={p} />
          ))}
        </Cont>
      )}
      {suggest && (
        <Cont>
          {data.length === 0 ? (
            <h2>No New Suggestions</h2>
          ) : (
            data.map((p) => (
              <KnowCard p={p} id={id} update={update} data={data} />
            ))
          )}
        </Cont>
      )}
      {pendingRequest && (
        <>
          <Head>Pending Requests</Head>
          <Cont>
            {data.length === 0 ? (
              <h2>No New Requests</h2>
            ) : (
              data.map((p) => (
                <AcceptCard p={p} id={id} update={update} data={data} />
              ))
            )}
          </Cont>
        </>
      )}
      {sentRequest && (
        <>
          <Head>Requests Sent</Head>
          <Cont>
            {data.length === 0 ? (
              <h2>No New Requests</h2>
            ) : (
              data.map((p) => (
                <SendReqCard p={p} id={id} update={update} data={data} />
              ))
            )}
          </Cont>
        </>
      )}
    </div>
  );
};

export default FriendsAll;

const Cont = styled.div`
  padding: 80px 50px;
  position: absolute;
  left: 350px;
  display: flex;
  flex-wrap: wrap;
  > div {
    flex: 1;
    flex-shrink: 1;
    /* border: 1px solid rgb(206, 208, 212); */
    margin: 5px;
    box-shadow: 2px 2px 5px var(--box-shadow-color);
  }
`;
const Head = styled.h2`
  padding: 0 50px;
  position: absolute;
  left: 360px;
  margin-bottom: 50px;
`;
