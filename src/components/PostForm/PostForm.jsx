import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default PostForm;
