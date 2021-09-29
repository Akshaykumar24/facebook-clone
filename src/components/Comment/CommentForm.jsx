import React,{useState} from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import axios from "axios";
import {url} from '../../utils/url'
const writeComment =  (id)=>{
  return axios.put(`${url}/api/comments/${id}`)
}

const CommentForm = () => {
  const [body,setBody]=useState('Write a comment...')
  const handleChange= (e)=>{
      setBody(e.target.value)
  }
  const handleComment = ()=>{
    writeComment()
  }
  return (
    <Box sx={{display:'flex', alignItems:'center'}} >
      <Avatar sx={{m:'1rem'}}>R</Avatar>
      <TextField
         fullWidth
        id="outlined-end-adornment"
        placeholder={body}
        onChange={handleChange}
        InputProps={{
          endAdornment: <InputAdornment position="start"> <Button onClick={handleComment}>comment</Button> emoji photo </InputAdornment>,
        }}
      />
    </Box>
  );
};

export default CommentForm;
