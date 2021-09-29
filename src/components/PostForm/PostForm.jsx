import React, { useState } from "react";
import axios from 'axios'
import {url} from '../../utils/url'
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
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
  const [body_text, setBodyText] = useState("Whats on your mind?");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value
    if(value.length>0){
      setButtonDisabled(false)
    }
    setBodyText(value);
  };
  const writePost = (body_text)=>{
    return axios.post(`${url}/api/posts`,{
      user_id:'Ravi Ranjan kumar',
      body_text:body_text
    })
  }
  const handleSubmit = ()=>{
    writePost(body_text).then((resp)=>{
      console.log(resp)
      if(resp.status===201){
        console.log('succes')
        handleClose()
      }
    }).catch((err)=>{console.log(err)})
    
  }

  return (
    <Box
      sx={{ border: "1px solid black", padding: "0 2rem", margin: "1rem 0" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
        <Avatar>R</Avatar>
        <Box onClick={handleOpen}>Whats on your mind</Box>
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
        <Box onClick={handleOpen}>Photo/Video</Box>
        <Box onClick={handleOpen}>Tag Friends</Box>
        <Box onClick={handleOpen}>Feeling/Activity</Box>
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
            <Box>
              <Box>Create Post</Box>
              <Box>X</Box>
            </Box>
            <Divider />
            <Box>
              <Box>
                <Avatar>R</Avatar>
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
                rows={5}
                fullWidth
                defaultValue={body_text}
                onChange={handleChange}
              />
            </Box>
            <Box></Box>
            <Box>Add to your post</Box>
            <Box><Button disabled={buttonDisabled} fullWidth variant="contained" onClick={handleSubmit} >Post</Button></Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default PostForm;
