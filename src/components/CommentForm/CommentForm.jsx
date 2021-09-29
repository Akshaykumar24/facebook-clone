import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import axios from "axios";
import { url } from "../../utils/url";
const writeComment = (id, body_text) => {
  return axios.post(`${url}/api/comments`, {
    body_text: body_text,
    post_id: id,
  });
};

const updatePost = (id, no_of_comments) => {
  return axios.patch(`${url}/api/posts/${id}`, {
    no_of_comments,
  });
};

const getPost = async (id) => {
  return axios.get(`${url}/api/posts/${id}`);
};

const CommentForm = ({ post_id }) => {
  const [body, setBody] = useState("Write a comment...");
  const handleChange = (e) => {
    setBody(e.target.value);
  };
  const handleComment = () => {
    // console.log(body)
    let comments = 0;
    writeComment(post_id, body).then((resp) => {
      console.log(resp);
    });

    getPost(post_id)
      .then(({ data }) => {
        comments = data.post.no_of_comments;
      })
      .then((resp) => {
        updatePost(post_id, comments + 1).then(({ data }) => {
          comments = data.post.no_of_comments;
        });
      });
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
      <Avatar sx={{ m: "0 1rem 0 0" }}>R</Avatar>
      <TextField
        fullWidth
        id="outlined-end-adornment"
        placeholder={body}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              {" "}
              <Button onClick={handleComment}>comment</Button> emoji photo{" "}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default CommentForm;
