import React from "react";

import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import LanguageIcon from "@mui/icons-material/Language";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/Share";

const PostCard = ({ post }) => {
  const { body_text } = post;
  console.log("body_text:", body_text);
  return (
    <Box
      sx={{ border: "1px solid black", padding: "0 2rem", margin: "1rem 0" }}
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
          }}
        >
          <Box>
            <Avatar>R</Avatar>
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
      <Box>{body_text}</Box>
      {/* post stat */}
      <Box></Box>
      <Divider variant="middle" />
      {/* like comment share */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
            alignItems: "center",
        }}
      >
        <Box>
          <ThumbUpOutlinedIcon /> Like
        </Box>
        <Box>
          <ChatBubbleOutlineOutlinedIcon /> Comment
        </Box>
        <Box>
          <ShareIcon /> Share
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
