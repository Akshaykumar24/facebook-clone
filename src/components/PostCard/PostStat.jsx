import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { AiOutlineLike } from "react-icons/ai";


const getPost = (id) => {
  return axios.get(`${url}/api/posts/${id}`);
};

const PostStat = ({ id,handleShowComments,noOfLikes,noOfComments }) => {
 
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
           

      setPostStat(stat );
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
          color:"#769292"
        }}
      >
        <Box>
          <Button variant="text" color="inherit" startIcon={<AiOutlineLike color="primary"/>}>
            { noOfLikes}
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
            <Button variant="text" color="inherit" onClick={()=>handleShowComments()} >
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
    </>
  );
};

export default PostStat;
