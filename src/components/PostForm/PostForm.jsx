import React, { useState } from "react";
import axios from "axios";

// import {useSelector} from 'react-redux'

import { url } from "../../utils/url";
import { useDispatch } from "react-redux";
import { getUserPosts } from "../../redux/auth/action";

import { Box, Button, Divider, Avatar, Modal, TextField } from "@mui/material";

import PhotoUploadForm from "../PhotoUploadForm/PhotoUploadForm";
import { FcStackOfPhotos } from "react-icons/fc";
import { BiSmile } from "react-icons/bi";
import { BsPersonPlusFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
// import { getData } from "../../utils/localStorage";
const modalStyle = {
  position: "absolute",
  top: "25% !important",
  left: "50%",
  transform: "translate(-50%, -10%)",
  width: '500px',
  maxHeight: '80vh',
  bgcolor: "background.paper",
  // border: "2px solid #df1313",
  // boxShadow: 24,
  p: "2rem 1.5rem",

  overflowY: "scroll",
  borderRadius: '10px',
  boxShadow: `0px 0px 10px var(--font-light-color)`,
  // position: "absolute",
  // top: '50% !important',
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: "30rem",
  // bgcolor: "background.paper",
  // borderRadius: " 0.9rem",
  // boxShadow: `0px 0px 10px var(--font-light-color)`,
  // maxHeight: "35rem",
  // overflowY: "scroll",
};

const PostForm = ({ user }) => {
  // console.log('user in form comp:', user.first_name)
  const dispatch = useDispatch();
  // modal control
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // text form control
  const [body_text, setBodyText] = useState(`What's on your mind?`);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [body_photo, setBody_photo] = useState("");


  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 0 || body_photo !== "") {
      setButtonDisabled(false);
    }
    setBodyText(value);
  };
  const writePost = (body_text, body_photo) => {
    // console.log(user._id)
    return axios.post(`${url}/api/posts`, {
      user_id: user._id,
      body_text: body_text,
      body_photo: body_photo,
      time: new Date(),
    });
  };
  // const handelbodyPhoto = ()=>{

  // }

  const handleSubmit = () => {
    writePost(body_text, body_photo)
      .then((resp) => {
        dispatch(getUserPosts(user._id));
        if (resp.status === 201) {
          // refreshPage();
          handleClose();
        }
      })
      .catch((err) => {
      });
  };
  // if (loading) {
  //   return <></>;
  // }

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: "1rem 2rem",
        margin: "1rem 0",
        boxShadow: "0 0 4px var(--icons-gray-color)"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
        <Avatar sx={{ m: "0 1rem 0 0" }} alt="R" src={
          user.profile === undefined
            ? `https://avatars.dicebear.com/api/micah/${user.first_name}.svg`
            : user.profile
        } />
        <Button
          fullWidth
          sx={{
            backgroundColor: "#E4E6E8",
            padding: "0.8rem",
            borderRadius: "50px",
          }}
          onClick={handleOpen}
        >
          What's on your mind
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <Button onClick={handleOpen}>
          <span>
            <FcStackOfPhotos />
          </span>
          <span>Photo/Video</span>
        </Button>
        <Button onClick={handleOpen}>
          <span>
            <BsPersonPlusFill />
          </span>
          <span>Tag Friends</span>
        </Button>
        <Button onClick={handleOpen}>
          <span>
            <BiSmile />
          </span>
          <span> Feeling/Activity</span>
        </Button>
      </Box>
      <Box>
        {" "}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "90%", textAlign: "center" }}>
                <h3>Create Post</h3>
              </Box>
              <Button
                sx={{ width: "10%" }}
                startIcon={<FaTimes onClick={handleClose} size="1.5rem" />}
              />
            </Box>
            <Divider />
            <Box sx={{ display: "flex", alignItems: "center", m: "1rem 0" }}>
              <Box>
                <Avatar sx={{ m: "0 1rem 0 0" }} alt="R" src={
                  user.profile === undefined
                    ? `https://avatars.dicebear.com/api/micah/${user.first_name}.svg`
                    : user.profile
                } />
              </Box>
              <Box>
                {/* <Box>{user.first_name}</Box> */}
                <Box>Public</Box>
              </Box>
            </Box>
            <Box>
              <TextField
                id="fullWidth"
                multiline
                rows={3}
                fullWidth
                // placeholder={user.first_name}
                value={body_text}
                onChange={handleChange}
              />
            </Box>
            <Box></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                m: "1rem 0",
              }}
            >
              <Box>Add to your post </Box>

              <PhotoUploadForm setBody_photo={setBody_photo} />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              {" "}
              <img src={body_photo} height="200px" alt="" />{" "}
            </Box>
            <Box>
              <Button
                disabled={buttonDisabled}
                fullWidth
                variant="contained"
                onClick={handleSubmit}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default PostForm;
