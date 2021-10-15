import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import PostStat from "./PostStat";
import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
import moment from "moment";
import styled from "styled-components";
import { Box, Button, Avatar, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { getData } from "../../utils/localStorage";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  getAllUserPosts,
  getOtherUsersPosts,
  getUserPosts,
  getAnotherUser,
  getAnotherUserPosts,
} from "../../redux/auth/action";
import { useHistory } from "react-router-dom";
const updatePost = (id, no_of_likes, liked_by) => {
  return axios.patch(`${url}/api/posts/update/${id}`, {
    no_of_likes,
    liked_by,
  });
};
const getPost = async (id) => {
  return axios.get(`${url}/api/posts/${id}`);
};
const getCommentOfThisPost = (id) => {
  return axios.get(`${url}/api/posts/${id}/comments`);
};

const PostCardWrapper = styled.div`
  div {
    color: var(--rcprimary);
    background-color: var(--rbgprimary);
  }
`;

const PostCard = ({ post, user }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log("user:", user);
  // console.log('user from post card:', user)
  // console.log('post:', post)
  const {
    body_text,
    _id,
    no_of_likes,
    no_of_comments,
    body_photo,
    user_id,
    liked_by,
    time,
  } = post;
  const [isComment, setIsComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState("");
  const [noOfLikes, setNoOfLikes] = useState(0);
  const [noOfComments, setNoOfComments] = useState(0);
  // const [hadLiked, setHadLiked] = useState(false);

  const [duration, setDuration] = useState();

  const [userData, setUserData] = useState(
    getData("userData").user
      ? getData("userData").user
      : getData("userData").userOnline
  );
  const state = useSelector((state) => state);
  const me = state.auth.user;
  // useEffect(()=>{
  //   const userId = user_id._id;
  //   setHadLiked(liked_by.includes(userId));
  // },[])

  let likes = 0;
  let likedBy = 0;

  useEffect(() => {
    setNoOfLikes(no_of_likes);
    setNoOfComments(no_of_comments);

    const momentDur = moment.utc(moment(new Date()).diff(moment(time), 'seconds'))

    if (Math.floor(Number(momentDur) / 3600) >= 24) {

      setDuration(Math.floor(Math.floor(Number(momentDur) / 3600) / 24) + " day")

    }
    else if (Math.floor(Number(momentDur) / 3600) >= 1) {
      setDuration(Math.floor(Number(momentDur) / 3600) + " hr")
    } else if (Math.floor(Number(momentDur) / 60) >= 1) {
      setDuration(Math.floor(Number(momentDur) / 60) + " min");
    } else {
      if (momentDur === 0) {
        setDuration("Just Now");
      } else {
        setDuration(Number(momentDur) + " sec");
      }
    }
  }, [no_of_comments, no_of_likes, time]);

  const handleLike = () => {
    getPost(_id)
      .then(({ data }) => {
        likes = data.post.no_of_likes;
        likedBy = data.post.liked_by;
      })
      .catch((err) => console.log(err))
      .then((resp) => {
        likedBy = [...likedBy, user._id];
        // console.log('likedBy:post: ', likedBy)
        updatePost(_id, likes + 1, likedBy).then(({ data }) => {
          likes = data.post.no_of_likes;
          setNoOfLikes(likes);
          dispatch(getAllUserPosts());
          dispatch(getOtherUsersPosts(_id));
          dispatch(getUserPosts(_id));
        });
      });
    axios
      .post(`${url}/api/notification`, {
        to: user._id,
        from: me._id,
        message: "Liked Your Post",
      })
      .then((res) => console.log(res));
  };

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
    setIsComment(true);
    getCommentOfThisPost(_id).then(({ data }) => {
      const commentsArr = data.comments;
      console.log(commentsArr);
      setComments(commentsArr);
    });
  };
  const sendCommentNotification = () => {
    axios
      .post(`${url}/api/notification`, {
        to: user._id,
        from: me._id,
        message: "Commented On Your Post",
      })
      .then((res) => console.log(res));
  };

  return (
    <PostCardWrapper>
      <Box sx={{ padding: "0 ", margin: "1.5rem 0" }}>
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
              <Avatar sx={{ m: "0 1rem", cursor: "pointer" }} onClick={() => {

                if (user_id._id === userData._id) {



                  history.push(`/profile`)


                  return
                } else {
                  dispatch(getAnotherUser(user_id._id))
                  dispatch(getAnotherUserPosts(user_id._id))
                  setTimeout(() => {

                    history.push(`/facebook/${user_id._id}`)

                  }, 2000)
                }


              }} alt="R" src={user_id.profile} />
            </Box>
            <Box>
              <Box sx={{ cursor: "pointer" }} > <span onClick={() => {

                if (user_id._id === userData._id) {



                  history.push(`/profile`)


                  return
                } else {
                  dispatch(getAnotherUser(user_id._id))
                  dispatch(getAnotherUserPosts(user_id._id))
                  setTimeout(() => {

                    history.push(`/facebook/${user_id._id}`)

                  }, 2000)
                }


              }} style={{ cursor: "pointer" }}>{user_id.first_name} </span></Box>
              <Box>{duration}{/* <LanguageIcon /> */}</Box>
            </Box>
          </Box>
          <Box>{/* <MoreHorizOutlined /> */}</Box>
        </Box>
        {/* post body */}
        <Box sx={{ margin: "1rem" }}>{body_text}</Box>
        <Box sx={{ margin: "0" }}>
          <img style={{ maxWidth: "100%", width: "100%" }} src={body_photo} alt="" />
        </Box>
        {/* post stat */}
        <Box>
          <PostStat
            key={_id}
            id={_id}
            noOfLikes={noOfLikes}
            noOfComments={noOfComments}
            liked_by={liked_by}
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
            color: "#769292",
          }}
        >
          <Box>
            <Button
              variant="text"
              color="inherit"
              onClick={handleLike}
              startIcon={<AiOutlineLike size="2rem" />}
            >
              Like
            </Button>
          </Box>

          {/* <Box>
          {hadLiked ? (
            <Button
              variant="text"
              color="success"
              onClick={handleLike}
              startIcon={<AiOutlineLike size='5rem'/>}
            >
              Like
            </Button>
          ) : (
            <Button
              variant="text"
              color="inherit"
              onClick={handleLike}
              startIcon={<AiOutlineLike size='2rem'/>}
            >
              Like
            </Button>
          )}
        </Box> */}
          <Box>
            <Button
              variant="text"
              color="inherit"
              onClick={() => {
                setIsComment((prev) => !prev);
              }}
              startIcon={<FaRegCommentAlt />}
            >
              Comment
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              color="inherit"
              startIcon={<RiShareForwardLine />}
            >
              Share
            </Button>
          </Box>
        </Box>
        {isComment && (
          <Box>
            <CommentForm
              post_id={_id}
              user={user}
              sendCommentNotification={sendCommentNotification}
              setComments={setComments}
            />
          </Box>
        )}
        {showComments && (
          <Box>
            {comments.length > 0 &&
              comments.map((comment) => {
                return <CommentCard post_id={_id * 2} comment={comment} />;
              })}
          </Box>
        )}
      </Box>
    </PostCardWrapper>
  );
};

export default PostCard;
