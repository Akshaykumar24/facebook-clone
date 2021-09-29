import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
const CommentCard = ({ comment }) => {
  console.log("comment:", comment);
  const { body_text } = comment;

  return (
    <Box sx={{ margin: "1rem 0" }}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Avatar sx={{ m: "1rem 1rem 0 0" }}>R</Avatar>
        </Box>
        <Box>
          <Box>
            <h3>Ravi</h3>
            <p>{body_text}</p>
          </Box>
          <Box>Like Reply</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentCard;
