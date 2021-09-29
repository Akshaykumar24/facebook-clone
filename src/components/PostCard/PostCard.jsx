import React from "react";
import axios from "axios";
import { url } from "../../utils/url";
import PostState from "./PostStat";

import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";

import LanguageIcon from "@mui/icons-material/Language";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const updatePost = (id, no_of_likes) => {
  return axios.patch(`${url}/api/posts/${id}`, {
    no_of_likes,
  });
};
const getPost = async (id) => {
  return axios.get(`${url}/api/posts/${id}`);
};

const PostCard = ({ post }) => {
  const { body_text, _id } = post;
  
  let likes = 0;
  const handleLike = () => {
    getPost(_id)
      .then(({ data }) => {
        likes = data.post.no_of_likes;
        console.log("likes:", likes);
      })
      .then((resp) => {
        updatePost(_id, likes + 1).then(({ data }) => {
          likes = data.post.no_of_likes;
          console.log("likes:", likes);
        });
      });
  };

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
        <PostState id={(_id)} />
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
          <Button
            variant="outlined"
            onClick={handleLike}
            startIcon={<AiOutlineLike />}
          >
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
