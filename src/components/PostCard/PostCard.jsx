import React from "react";
import axios from "axios";

import PostState from './PostStat'

import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";

import LanguageIcon from "@mui/icons-material/Language";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const writePost = async () => {
  axios
    .post("http://localhost:2345/posts", {
      user_id: "ravi from react",
      body_text: "first post",
    })
    .then((resp) => {
      console.log(resp);
    });
};

const PostCard = ({ post }) => {
  const { body_text,_id } = post;
  
  
  return (
    <Box
      sx={{ border: "1px solid black", padding: "0 2rem", margin: "1rem 0" }}
    >
      {/* header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            margin: "1rem 0",
          }}
        >
          <Box>
            <Avatar>R</Avatar>
          </Box>
          <Box>
            <Box>Ravi Ranjan Kumar</Box>
            <Box>
              22h <LanguageIcon />
            </Box>
          </Box>
        </Box>
        <Box>
          <MoreHorizIcon />
        </Box>
      </Box>
      {/* post body */}
      <Box sx={{ margin: "1rem 0" }}>{body_text}</Box>
      {/* post stat */}
      <Box>
        <PostState id={_id}/>
      </Box>
      <Divider variant="middle" />
      {/* like comment share */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          margin: "1rem 0",
        }}
      >
        <Box>
          <Button variant="outlined" startIcon={<AiOutlineLike />}>
            Like
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" startIcon={<FaRegCommentAlt />}>
            Comment
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" startIcon={<RiShareForwardLine />}>
            Share
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
