import React, { useEffect, useState } from "react";
import FriendsLeft from "./FriendsLeft";
import KnowCard from "./KnowCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SendReqCard from "./SendReqCard";
import AcceptCard from "./AcceptCard";
import axios from "axios";
import { url } from "../../utils/url";

const p = {
  first_name: "Akshay",
  profile:
    "https://tse1.mm.bing.net/th?id=OIP.ZzK9QmxgtHFysccpbohqYAHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112",
};

const FriendsAll = () => {
  const [suggest, setSuggest] = useState(false);
  const [find, setFind] = useState(false);
  const [birth, setBirth] = useState(false);
  const [request, setRequest] = useState(false);

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
  }, [find]);
  useEffect(() => {
    if (request) {
      setData(friendRequestRecieved);
    }
  }, [request]);
  useEffect(() => {
    if (suggest) {
      axios.get(`${url}/api/user/all/${id}`).then(({ data }) => {
        //console.log(data);
        return setData(data.user);
      });
    }
  }, [suggest]);
  return (
    <div>
      All Friends Can be found here
      <FriendsLeft
        suggest={suggest}
        request={request}
        find={find}
        birth={birth}
        setSuggest={setSuggest}
        setRequest={setRequest}
        setFind={setFind}
        setBirth={setBirth}
      />
      <Cont>
        {find && data.map((p) => <KnowCard p={p} />)}
        {suggest && data.map((p) => <KnowCard p={p} />)}
        {request && (
          <>
            <h2>Pending Requests</h2>
            {data.map((p) => (
              <AcceptCard p={p} id={id} />
            ))}
            <h2>Requests Sent</h2>
            {friendRequestSent.map((p) => (
              <SendReqCard p={p} />
            ))}
          </>
        )}
      </Cont>
    </div>
  );
};

export default FriendsAll;

const Cont = styled.div`
  padding: 50px;
  position: absolute;
  left: 350px;
`;
