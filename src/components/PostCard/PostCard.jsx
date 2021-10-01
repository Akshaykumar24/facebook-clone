import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import PostStat from "./PostStat";
import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
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
const getCommentOfThisPost = (id) => {
  return axios.get(`${url}/api/posts/${id}/comments`);
};

const PostCard = ({ post }) => {
  const { body_text, _id, no_of_likes, no_of_comments, body_photo } = post;
  const [isComment, setIsComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState("");
  const [noOfLikes, setNoOfLikes] = useState(0);
  const [noOfComments, setNoOfComments] = useState(0);

  let likes = 0;
  useEffect(() => {
    setNoOfLikes(no_of_likes);
    setNoOfComments(no_of_comments);
  }, [no_of_comments, no_of_likes]);

  const handleLike = () => {
    getPost(_id)
      .then(({ data }) => {
        likes = data.post.no_of_likes;
      })
      .catch((err) => console.log(err))
      .then((resp) => {
        updatePost(_id, likes + 1).then(({ data }) => {
          likes = data.post.no_of_likes;
          setNoOfLikes(likes);
        });
      });
  };

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
    setIsComment(true);
    getCommentOfThisPost(_id).then(({ data }) => {
      const commentsArr = data.comments;

      setComments(commentsArr);
    });
  };
  return (
    <Box
      sx={{ backgroundColor: "#FFFFFF", padding: "0 2rem", margin: "1rem 0" }}
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
            <Avatar sx={{ m: "0 1rem 0 0" }} alt="R" src={body_photo} />
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
      <Box sx={{ margin: "1rem 0" }}>
        <img src={body_photo} alt="" />
      </Box>
      {/* post stat */}
      <Box>
        <PostStat
          id={_id}
          noOfLikes={noOfLikes}
          noOfComments={noOfComments}
          handleShowComments={handleShowComments}
        />
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
          padding: "0 2rem",
        }}
      >
        <Box>
          <Button
            variant="text"
            onClick={handleLike}
            startIcon={<AiOutlineLike />}
          >
            Like
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            onClick={() => {
              setIsComment((prev) => !prev);
            }}
            startIcon={<FaRegCommentAlt />}
          >
            Comment
          </Button>
        </Box>
        <Box>
          <Button variant="text" startIcon={<RiShareForwardLine />}>
            Share
          </Button>
        </Box>
      </Box>
      {isComment && (
        <Box>
          <CommentForm post_id={_id} />
        </Box>
      )}
      {showComments && (
        <Box>
          {comments.length > 0 &&
            comments.map((comment) => {
              return <CommentCard comment={comment} />;
            })}
        </Box>
      )}
    </Box>
  );
};

export default PostCard;
