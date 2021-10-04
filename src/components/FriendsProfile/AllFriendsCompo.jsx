import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { getData } from "../../utils/localStorage";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getAnotherUser, getAnotherUserPosts } from "../../redux/auth/action";
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
function AllFriendsCompo({ refreshPage }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userData, setUserData] = useState(
    getData("frndData").user
      ? getData("frndData").user
      : getData("frndData").userOnline
  );
  const [mainuser, setMainUser] = useState(
    getData("userData").user
      ? getData("userData").user
      : getData("userData").userOnline
  )
  const [friendsList, setFriendsList] = useState(userData.friends);

  const getMutual = (data, arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (Number(arr[i]._id) === Number(data[j]._id)) {
          count++;
        }
      }
    }
    return count;
  };
  return (
    <AllFriendsCompoStyled>
      <div>
        <h1>Friends</h1>
      </div>
      <MainFriendDivStled>
        {friendsList.map((el) => {
          return (
            <div key={uuidv4()}>
              <div className="imageDiv">
                <img
                  onClick={() => {


                    if (el._id === userData._id) {



                      history.push(`/profile`)


                      return
                    } else {
                      dispatch(getAnotherUser(el._id))
                      dispatch(getAnotherUserPosts(el._id))
                      setTimeout(() => {

                        history.push(`/facebook/${el._id}`)
                        refreshPage()
                      }, 2000)
                    }

                  }}
                  src={
                    el.profile === undefined
                      ? `https://avatars.dicebear.com/api/micah/${el.first_name}.svg`
                      : el.profile
                  }
                  alt=""
                />
              </div>
              <div className="nameMutualFrnd">
                <span onClick={() => {
                  if (el._id === userData._id) {



                    history.push(`/profile`)


                    return
                  } else {
                    dispatch(getAnotherUser(el._id))
                    dispatch(getAnotherUserPosts(el._id))
                    setTimeout(() => {

                      history.push(`/facebook/${el._id}`)
                      refreshPage()
                    }, 2000)
                  }
                }}>{el.first_name + " " + el.last_name}</span>
                <span>{getMutual(el.friends, mainuser.friends)} mutual friends</span>
              </div>

              <div className="moreDiv">
                <CheckMoreOptions>
                  <MoreHorizIcon />
                </CheckMoreOptions>
              </div>
            </div>
          );
        })}
      </MainFriendDivStled>
    </AllFriendsCompoStyled>
  );
}
const AllFriendsCompoStyled = styled.div`
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
  grid-template-columns: 1fr 1fr;
  & > div {
    display: flex;
    justify-content: space-around;
    height: 4rem;
    .imageDiv {
      img {
        width: 80px;
        border-radius:5px;
        height: 100%;
        cursor: pointer;
      }
    }
    .nameMutualFrnd {
      display: grid;

      justify-content: start;

      align-items: center;
      min-width: 10rem;
      padding: 14px 0px;

      span {
        font-size: 11px;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
      span:nth-child(1) {
        font-size: 1rem;
        font-weight: 600;
        color: var(--font-dark-color);
      }
      span:nth-child(2) {
        color: var(--ofont-color1);
      }
    }
    .moreDiv {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const CheckMoreOptions = styled.p`
  width: 35px;
  height: 35px;
  border-radius: 50%;

  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  box-shadow: 1px 1px 4px var(--icons-gray-color);
  :hover {
    background-color: var(--hover-effect);
  }
`;

export default AllFriendsCompo;
