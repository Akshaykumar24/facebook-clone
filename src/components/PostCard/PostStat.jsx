import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { url } from "../../utils/url";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { LikeBox } from "./PostStat.styles";
import { AiOutlineLike } from "react-icons/ai";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
  // console.log("liked_by in post stat: ", liked_by);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [likers, setLikers] = useState([]);

  // useEffect(() => {
  //   liked_by.forEach((id) => {
  //     console.log("id of liked:", id);
  //     axios.get(`${url}/api/user/${id}`).then(({ data }) => {

  //       setLikers((prev) => {
  //         return [...prev, data.user];
  //       });
  //     });
  //   });
  // }, [liked_by]);



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
            onClick={handleOpen}
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
      <LikeBox>
        <Modal
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
        </Modal>
      </LikeBox>
    </>
  );
};

export default PostStat;
