import React from "react";
import styled from "styled-components";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { getData } from "../../utils/localStorage";
import { useState } from "react";
// import { useDispatch } from "react-redux"
// import { getAnotherUser } from "../../redux/auth/action";
// import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
function AllPhotosCompo() {


    const [frndsPosts, setFrndsPosts] = useState(
        getData("frndsPosts")?.posts ? getData("frndsPosts").posts : []
    )

    const [photos, setPhotos] = useState(frndsPosts.filter((el) => {
        return el.body_photo.length > 0
    }))


    return (
        <AllPhotosCompoStyled>
            <div>
                <h1>Photos</h1>
            </div>
            <MainFriendDivStled>
                {photos.length > 0 ? photos.map((el) => {
                    return (
                        <div key={uuidv4()}>
                            <img src={el.body_photo} alt="" />

                        </div>
                    );
                }) : <h1>No photos to show</h1>}
            </MainFriendDivStled>
        </AllPhotosCompoStyled>
    );
}
const AllPhotosCompoStyled = styled.div`
  width: 55rem;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
margin-top:1rem;
  padding: 2rem;
  box-shadow: 0px 0px 13px var(--icons-gray-color);
  border-radius: 1rem;
  background-color: var(--border-color);
  &>div:nth-child(1){
      h1{
        font-size: 2rem;
    }
  }
`;
const MainFriendDivStled = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  & > div {
height: 10rem;
img{
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow:0px 0px 4px var(--icons-gray-color);
}
   

  }
`;


export default AllPhotosCompo;
