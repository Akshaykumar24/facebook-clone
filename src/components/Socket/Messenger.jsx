import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Conversation from "./Conversation";
import Online from "./Online";
import Text from "./Text";
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from "../../utils/url";

import { io } from "socket.io-client";

const Messenger = () => {
  const [conversate, setConversate] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  const scrollRef = useRef();
  const state = useSelector((state) => state);
  let user = state.auth.user;

  useEffect(() => {
    socket.current = io("ws://localhost:5000");
    socket.current.on("getMessage", (data) => {
      console.log("HERE");
      setArrivalMessage({
        sender: data.senderId,
        message: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    // const currentCon = conversate.find((t) => t._id === currentChat);
    // console.log(currentCon, arrivalMessage);
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);
  console.log(conversate, currentChat, arrivalMessage);
  useEffect(() => {
    const getConvo = async () => {
      axios
        .get(`${url}/api/conversation/${user._id}`)
        .then(({ data }) => setConversate(data.conversation));
    };
    getConvo();
  }, []);

  useEffect(() => {
    const getmessages = async () => {
      await axios
        .get(`${url}/api/message/${currentChat?._id}`)
        .then(({ data }) => {
          return setMessages(data.msg);
        });
    };
    getmessages();
  }, [currentChat]);

  useEffect(() => {
    //to scroll into iew of new message
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const payload = {
      sender: user._id,
      message: newMessage,
      conversationId: currentChat._id,
    };
    // const currentCon = conversate.find((t) => t._id === currentChat);
    // console.log(currentCon);
    const recieverId = currentChat?.members.find((m) => m !== user._id);
    socket.current.emit("sendMessage", {
      senderId: user._id,
      recieverId,
      text: newMessage,
    });
    try {
      const res = await axios.post(`${url}/api/message`, payload);
      setMessages([...messages, res.data.msg]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Mes>
      <Friends>
        <input type="text" />
        {conversate.map((c) => (
          <div onClick={() => setCurrentChat(c)}>
            <Conversation c={c} me={user} />
          </div>
        ))}
      </Friends>
      <Chat>
        {currentChat ? (
          <>
            <div>
              {messages.map((m) => (
                <div ref={scrollRef}>
                  <Text m={m} my={m.sender._id === user._id} />
                </div>
              ))}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Text Here"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>
              <button onClick={(e) => sendMessage(e)}>Send</button>
            </div>
          </>
        ) : (
          <div>select Chat</div>
        )}
      </Chat>
      <Prof>
        <Online />
        <Online />
        <Online />
        <button
          onClick={() => {
            console.log(conversate, "conversate");
            console.log(currentChat, "currentChat");
          }}
        >
          Print
        </button>
      </Prof>
    </Mes>
  );
};

export default Messenger;

const Mes = styled.div`
  display: flex;
  padding-top: 50px;
  height: 100vh;

  > :first-child {
    flex: 3;
    background-color: teal;
  }
  > :nth-child(2) {
    flex: 6;
    background-color: lightyellow;
  }
  > :last-child {
    flex: 3;
    background-color: lightcoral;
  }
`;
const Friends = styled.div``;
const Chat = styled.div`
  > :first-child {
    height: 85%;
    overflow-y: scroll;
  }
  > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    > textarea {
      max-width: 85%;
      min-width: 80%;
      padding: 2px 10px;
      font-size: 18px;
      border-radius: 20px;
    }
    > button {
      width: 10%;
      height: 40px;
      border-radius: 8px;
      background-color: rgb(24, 119, 242);
      color: white;
      margin: 0px 2%;
    }
  }
`;
const Prof = styled.div``;
