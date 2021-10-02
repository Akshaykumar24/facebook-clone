import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { getData } from "../../utils/localStorage";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getAnotherUser } from "../../redux/auth/action";
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
function AllPhotosCompo({ handleSeeAllPhotos }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const photosData = [
        "https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.6435-9/35799287_2073684202954764_7545216993050230784_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=_hZCbwLIc6wAX9Gebht&_nc_ht=scontent.fpnq7-4.fna&oh=f56970935bc300864b0c21ee0de0ea95&oe=61791D41",
        "https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.6435-9/32368897_2037243136515560_6592291929071812608_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_ohc=0aVwZHV9O0AAX-rnVH0&_nc_ht=scontent.fpnq7-1.fna&oh=820f7fe731575d81a96080e7d0a23929&oe=617A3B05",
        "https://scontent.fpnq7-2.fna.fbcdn.net/v/t31.18172-8/17311080_403017623394726_4233606543281570706_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=U8fes0JUmDEAX-7AbGD&_nc_ht=scontent.fpnq7-2.fna&oh=7fd2f146d66a913c50110a91b2fca6b3&oe=61770FBC",
        "https://scontent.fpnq7-3.fna.fbcdn.net/v/t1.18169-9/20799272_1894041747585678_5077664781507234180_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=aVUjHFagV78AX8qzhz7&_nc_ht=scontent.fpnq7-3.fna&oh=d8994f0be4371a2a9d0802f1fc00886b&oe=6178F24E",
        "https://scontent.fpnq7-3.fna.fbcdn.net/v/t1.18169-9/28379174_2011067265817101_4382124196792763882_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=uaX5p2cTUsoAX-tVDa3&_nc_ht=scontent.fpnq7-3.fna&oh=c6495dba4f8250de63cf882e3117fcb3&oe=6178370D",
        "https://scontent.fpnq7-4.fna.fbcdn.net/v/t31.18172-8/28234853_398649490546694_1012216097464701185_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=19026a&_nc_ohc=7nzvz-WWjbkAX9RDGGa&_nc_ht=scontent.fpnq7-4.fna&oh=41664ab0bd53909ad66671820c654df3&oe=6177B8CD",
        "https://scontent.fpnq7-1.fna.fbcdn.net/v/t31.18172-8/28071078_2004738646449963_7932902297441421327_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=54zOVFAdtmkAX_skP6V&_nc_ht=scontent.fpnq7-1.fna&oh=1b10123b14108e463fe203d52c068a45&oe=6177198E",
        "https://scontent.fpnq7-4.fna.fbcdn.net/v/t31.18172-8/27982749_2004441323146362_7572999494274059494_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=pIAfAknp0NYAX8rMOJJ&_nc_ht=scontent.fpnq7-4.fna&oh=c99b7fea322e5232f3ead4e5a8ebc80c&oe=61783394",
        "https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.18169-9/26231609_1987217571535404_8550689058995090995_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=e_XD2SY3qKAAX8_60EM&_nc_ht=scontent.fpnq7-4.fna&oh=724a4dab9a947a10f8d1359332f36e15&oe=617A5CDD",
    ];

    return (
        <AllPhotosCompoStyled>
            <div>
                <h1>Photos</h1>
            </div>
            <MainFriendDivStled>
                {photosData.map((el) => {
                    return (
                        <div key={uuidv4()}>
                            <img src={el} alt="" />

                        </div>
                    );
                })}
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
}
   

  }
`;


export default AllPhotosCompo;
