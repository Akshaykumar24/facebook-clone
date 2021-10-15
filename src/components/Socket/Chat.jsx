// import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const Chat = () => {
//   const [text, setText] = useState("");
//   const [join, setJoin] = useState("");
//   const [message, setMessage] = useState([]);
//   const [users, setusers] = useState([]);
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const socket = io("http://localhost:5000");

//   socket.on("recieve-message", (mes) => {
//     console.log(message);
//     display(mes);
//     setMessage([...message, mes]);
//   });
//   useEffect(() => {
//     socket.on("connect", () => {
//       setusers([...users, socket.id]);
//       setId(socket.id);
//       console.log(`You are connected with id:${socket.id}`);
//     });
//     socket.name = name;
//   }, []);

//   const textChange = (e, p) => {
//     p(e.target.value);
//   };
//   const send = () => {
//     display(text);
//     socket.emit("send-message", text, join);
//     setText("");
//   };

//   const display = (m) => {
//     setMessage([...message, m]);
//   };
//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => textChange(e, setName)}
//       />
//       <br />
//       <br />
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => textChange(e, setText)}
//       />
//       <br />
//       <br />
//       <button onClick={send}>Send</button>

//       <br />
//       <br />
//       <br />
//       <input
//         type="text"
//         value={join}
//         onChange={(e) => textChange(e, setJoin)}
//       />
//       <br />
//       <br />
//       <button>Join</button>
//       <div>
//         <h2>Users</h2>
//         {users.map((i) => (
//           <li>{i}</li>
//         ))}
//       </div>
//       <div>
//         <h2>Messages</h2>
//         {message.map((i) => (
//           <li>{i}</li>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chat;
