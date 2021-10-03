import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
const CommentCard = ({ comment }) => {
  console.log('comment card :', comment)
  
  const { body_text,body_photo,commentd_by } = comment;

  return (
    <Box sx={{ margin: "1rem 0" }}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Avatar sx={{ m: "1rem 1rem 0 0" }}>R</Avatar>
        </Box>
        <Box>
          <Box>
            <h3>{commentd_by.first_name}</h3>
            <p>{body_text}</p>
            <img src={body_photo} alt="" />
          </Box>
          <Box>Like Reply</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentCard;
