import React, { useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PhotoUploadForm from "../PhotoUploadForm/PhotoUploadForm";
import { FcStackOfPhotos } from "react-icons/fc";
import { BiSmile } from "react-icons/bi";
import { BsPersonPlusFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const modalStyle = {
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

const PostForm = () => {
  // modal control
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // text form control
  const [body_text, setBodyText] = useState("What's on your mind?");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [body_photo, setBody_photo] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setButtonDisabled(false);
    }
    setBodyText(value);
  };
  const writePost = (body_text, body_photo) => {
    return axios.post(`${url}/api/posts`, {
      user_id: "Ravi Ranjan kumar",
      body_text: body_text,
      body_photo: body_photo,
    });
  };
  // const handelbodyPhoto = ()=>{

  // }

  const handleSubmit = () => {
    writePost(body_text, body_photo)
      .then((resp) => {
        console.log(resp);
        if (resp.status === 201) {
          console.log("succes");
          handleClose();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: "1rem 2rem",
        margin: "1rem 0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
        <Avatar sx={{ m: "0 1rem 0 0" }} alt="R" src={body_photo} />
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
              <Button sx={{ width: "10%" }} startIcon={<FaTimes onClick={handleClose} size="1.5rem" />}/>
                
            </Box>
            <Divider />
            <Box sx={{display:'flex',alignItems:'center',m:'1rem 0'}}>
              <Box>
                <Avatar sx={{ m: "0 1rem 0 0" }} alt="R" src={body_photo} />
              </Box>
              <Box>
                <Box>Ravi Ranjan Kumar</Box>
                <Box>Public</Box>
              </Box>
            </Box>
            <Box>
              <TextField
                id="fullWidth"
                multiline
                rows={3}
                fullWidth
                defaultValue={body_text}
                onChange={handleChange}
              />
            </Box>
            <Box></Box>
            <Box>
              Add to your post <PhotoUploadForm setBody_photo={setBody_photo} />
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
