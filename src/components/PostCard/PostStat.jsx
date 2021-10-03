import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../../utils/url";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { LikeBox } from "./PostStat.styles";
import { AiOutlineLike } from "react-icons/ai";
import styled from 'styled-components'
import Popover from "@mui/material/Popover";

const MyDiv=styled.div`
background-color: var(--background-gray-color);
color:var(--font-dark-color);
padding:2rem,

`

const getPost = (id) => {
  return axios.get(`${url}/api/posts/${id}`);
};

const PostStat = ({
  id,
  handleShowComments,
  noOfLikes,
  noOfComments,
  liked_by,
}) => {
  const [likers, setLikers] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idp = open ? "simple-popover" : undefined;

  useEffect(() => {
    liked_by.forEach((id) => {
      axios.get(`${url}/api/user/${id}`).then(({ data }) => {
        setLikers((prev) => {
          return [...prev, data.user];
        });
      });
    });
  }, [liked_by]);

  const [postStat, setPostStat] = useState({
    no_of_likes: 0,
    no_of_comments: 0,
    no_of_shares: 0,
    liked_by: [],
    commented_by: [],
    shared_by: [],
  });
  useEffect(() => {
    getPost(id).then(({ data }) => {
      const stat = data.post;

      setPostStat(stat);
    });
  }, [id]);
  // console.log(postStat)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          margin: "1rem 0",
          color: "#769292",
        }}
      >
        <Box>
          <Button
            variant="text"
            color="inherit"
            // onClick={handleOpen}
            aria-describedby={id}
            onClick={handleClick}
            startIcon={<AiOutlineLike color="primary" />}
          >
            {noOfLikes}
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Button
              variant="text"
              color="inherit"
              onClick={() => handleShowComments()}
            >
              {noOfComments} comments
            </Button>
          </Box>
          <Box>
            <Button variant="text" color="inherit">
              {postStat.no_of_shares} shares
            </Button>
          </Box>
        </Box>
      </Box>
      <LikeBox >
        {likers.length > 0 &&<Popover
          id={idp}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          {
            likers.map((liker) => {
              return (
                <MyDiv  key={liker._id}>
                  <Link to={`/user/${liker._id}`}> {liker.first_name} </Link>
                </MyDiv>
              );
            })}
        </Popover>}
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {likers.map((liker) => {

              return <div key={liker._id}><Link to={`/user/${liker._id}`} >  {liker.first_name} </Link></div>;
            })}
          </Box>
        </Modal> */}
      </LikeBox>
    </>
  );
};

export default PostStat;
