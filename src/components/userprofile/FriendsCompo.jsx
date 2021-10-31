import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAnotherUser, getAnotherUserPosts } from '../../redux/auth/action'

import { getData } from '../../utils/localStorage'
//   <img
//       src={
//         userData.profile === undefined
//           ? `https://avatars.dicebear.com/api/micah/${userData.first_name}.svg`
//           : userData.profile
//       }
//       alt="profile"
//     />

function FriendsCompo({ friends, handleSeeAllfriends }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [userData, setUserData] = useState(
        getData("userData").user
            ? getData("userData").user
            : getData("userData").userOnline
    );

    return (
        <FriendsCompoStyled>
            <div className="linksForPhotos">
                <div>
                    <span>Friends</span>
                    <span>{friends.length} friends</span>
                </div>

                <div onClick={handleSeeAllfriends}>See All Friends</div>
            </div>
            <div className="photosGrid">
                {friends.slice(0, 9).map((el) => {
                    return <div>
                        <img onClick={() => {


                            dispatch(getAnotherUser(el._id))
                            dispatch(getAnotherUserPosts(el._id))
                            setTimeout(() => {

                                history.push(`/facebook/${el._id}`)
                            }, 2000)

                        }} src={
                            el.profile === undefined
                                ? `https://avatars.dicebear.com/api/micah/${el.first_name}.svg`
                                : el.profile
                        } alt="" />
                        <span>{el.first_name + " " + el.last_name}</span>
                    </div>
                })}
            </div>
        </FriendsCompoStyled>
    )
}
const FriendsCompoStyled = styled.div`
  width: 100%;
  margin: auto;
  height: auto;
  display: grid;
  padding: 15px;
  grid-gap: 1rem;
  box-shadow: 0px 0px 13px var(--icons-gray-color);
  border-radius: 1rem;
  background-color: var(--border-color);
  .linksForPhotos {
    display: flex;
    column-gap: 9rem;
    padding: 2px 2px;
    align-items: center;
& > div:nth-child(1){
    display: grid;
        & > span:nth-child(1) {
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
      :hover{
          text-decoration: underline;
      }
    }
    &>span:nth-child(2){
         color:var(--ofont-color1)
    }
}
    & > div:nth-child(2) {
      width: 7rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ofont-primary-color);
      :hover {
        background-color: var(--background-gray-color);
        cursor: pointer;
      }
    }
  }
  .photosGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    width: 100%;
   &>div{
       display: grid;
       width: 100%;
   img {
      width: 100%;
      height: 6.6rem;
      border-radius: 10px;
      cursor: pointer;
      object-fit: cover;
    }
    span{
        text-align: left;
    font-size: 14px;
    font-weight: 600;
    }
   }
 
  }



`
export default FriendsCompo
