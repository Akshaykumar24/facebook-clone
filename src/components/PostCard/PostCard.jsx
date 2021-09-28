import React from "react";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import LanguageIcon from "@mui/icons-material/Language";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/Share";
const PostCard = () => {
  return (
    <Box sx={{ bgcolor: deepOrange[500] }}>
      {/* header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
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
      <Box>post text</Box>
      {/* post stat */}
      <Box></Box>
      <Divider variant="middle" />
      {/* like comment share */}
      <Box>
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
