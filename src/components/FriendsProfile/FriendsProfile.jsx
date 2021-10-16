import React from "react";
import styled from "styled-components";
import { MainLayout } from "../../styles/layouts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState, useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import Intro from "./Intro";
import PhotosComp from "./PhotosComp";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FriendsCompo from "./FriendsCompo";
// import PhotosComp from "../userprofile/PhotosComp";
// import FriendsCompo from "../userprofile/FriendsCompo";
// import Intro from "./Intro";
// import PhotosComp from "./PhotosComp";
// import FriendsCompo from "./FriendsCompo";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/localStorage";
import { MainPostLayout } from "../../styles/layouts";
import AboutCompo from "./AboutCompo";
import AllFriendsCompo from "./AllFriendsCompo";
import AllPhotosCompo from "./AllPhotosCompo";
import PostCard from "../PostCard/PostCard";
import { useDispatch } from "react-redux";
import { getAnotherUserPosts } from "../../redux/auth/action";
function FriendsProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // console.log(user)
  const [posts, setPosts] = useState(true);
  const [friends, setFriends] = useState(false);
  const [photos, setPhotos] = useState(false);
  const [about, setAbout] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };

  const defaultUserPic = {
    coverPic:
      "https://th.bing.com/th/id/R.b60ebb76818e10a1ffeb1d76ef807568?rik=BfJWM%2bFjq3YsSA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fFacebook-Covers-004.jpg&ehk=QyHMcIYCHj1%2bqMrmjGWLcUOKe7Zi8kTKnVJ2G1zuQqA%3d&risl=&pid=ImgRaw&r=0",
    profilePic:
      "https://th.bing.com/th/id/R.56fa805242ca705c112c21e9142391c6?rik=0FGHjmAsLgoKhQ&riu=http%3a%2f%2fsguru.org%2fwp-content%2fuploads%2f2017%2f04%2fattitude-boys-profile-pics-for-Facebook-20.jpg&ehk=A%2bCtAIdAM172Ttozp8O2Yieal74Rvzj2O%2fHwjJnGrkQ%3d&risl=&pid=ImgRaw&r=0",
  };

  const [userData, setUserData] = useState(
    getData("frndData").user
      ? getData("frndData").user
      : getData("frndData").userOnline
  );
  const [mainuser, setMainuser] = useState(
    getData("userData").user
      ? getData("userData").user
      : getData("userData").userOnline
  );
  const [userPosts, setUserPosts] = useState(
    getData("frndsPosts").posts
      ? getData("frndsPosts").posts
      : []
  );
  useEffect(() => {

    dispatch(getAnotherUserPosts(userData._id))
  }, [])

  const id2 = userData._id

  const check = (id2, mainuser) => {
    for (let i = 0; i < mainuser.friends.length; i++) {
      if (mainuser.friends[i]._id === userData._id) {
        return true
      }
    }
    return false
  };

  const handleSeeAllfriends = () => {
    setFriends(true);
    setPosts(false);
    setAbout(false)
    setPhotos(false);
  }
  const handleSeeAllPhotos = () => {
    setPhotos(true);
    setFriends(false);
    setPosts(false);
    setAbout(false)
  }
  const handleProfilesMenu = (e) => {
    if (e.target.textContent === "Posts") {
      setPosts(true);
      setPhotos(false);
      setAbout(false)
      setFriends(false);
    } else if (e.target.textContent === "Friends") {
      setFriends(true);
      setPosts(false);
      setAbout(false)
      setPhotos(false);
    } else if (e.target.textContent === "Photos") {
      setPhotos(true);
      setFriends(false);
      setPosts(false);
      setAbout(false)
    } else if (e.target.textContent === "About") {
      setPhotos(false);
      setFriends(false);
      setAbout(true)
      setPosts(false);
    }
  };

  return (
    <UserProfileStyles>
      <div className="mainProfile">
        <MainLayout>
          <div className="profilePhotos">
            <div className="coverPhoto">
              <img
                src={
                  userData?.cover ? userData?.cover : defaultUserPic.coverPic
                }
                alt="coverPhoto"
              />
            </div>
            <div className="avatar">
              <img
                style={{ backgroundColor: "white" }}
                src={
                  userData.profile === undefined
                    ? `https://avatars.dicebear.com/api/micah/${userData.first_name}.svg`
                    : userData.profile
                }
                alt="profilePhoto"
              />
            </div>
          </div>

          <div className="profileBio">
            <div className="Bio">
              <div>
                <h1>{userData.first_name + " " + userData.last_name}</h1>
                <div>
                  <p>{userData.bio}</p>

                </div>
              </div>
            </div>
            <div className="profileMenuItems">
              <div
                className={`${posts ? "menuBorder-bottom" : ""}`}
                onClick={handleProfilesMenu}
              >
                Posts
              </div>
              <div className={`${about ? "menuBorder-bottom" : ""}`} onClick={handleProfilesMenu}>About</div>
              <div
                className={`${friends ? "menuBorder-bottom" : ""}`}
                onClick={handleProfilesMenu}
              >
                Friends
              </div>
              <div
                className={`${photos ? "menuBorder-bottom" : ""}`}
                onClick={handleProfilesMenu}
              >
                Photos
              </div>
              <div>Stories Archive</div>
              <div>
                <span>More</span> <ArrowDropDownIcon />
              </div>
              <div className="specialC">
                <div className="menuflex primarybgc">
                  {check(id2, mainuser) ? <><DoneAllIcon fontSize="medium" /> <span> Friends </span></> : <><PersonAddIcon /><span>Add Friend</span></>}
                </div>
              </div>
              <div className="specialC">
                <div>
                  <ChatIcon /> <span>Message</span>
                </div>
              </div>
              <div className="menu">
                <div>
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
      <MainPostLayout>
        {posts ? <PostCompoSyled>
          <div>
            <Intro
              work1={userData.work1}
              work2={userData.work2}
              education1={userData.education1}
              education2={userData.education2}
              livesIn={userData.city1}
              from={userData.city2}
              joined={userData.createdAt}
              followedBy={userData.friendRequestRecieved.length}
            />
            <PhotosComp handleSeeAllPhotos={handleSeeAllPhotos} />
            <FriendsCompo handleSeeAllfriends={handleSeeAllfriends} refreshPage={refreshPage} friends={userData.friends} userData={userData} />
          </div>
          <div>
            {userPosts.length >= 1 ? userPosts.reverse().map((el) => {
              return <PostCard post={el} user={el.user_id} />
            }) : <UserNotPostingStyled><h1>This user has not posted yet.</h1></UserNotPostingStyled>}
          </div>
        </PostCompoSyled> : ""}
        {about ? <AboutCompo /> : ""}
        {friends ? <AllFriendsCompo refreshPage={refreshPage} /> : ""}
        {photos ? <AllPhotosCompo /> : ""}
      </MainPostLayout>
    </UserProfileStyles>
  );
}
const UserNotPostingStyled = styled.div`
width: 100%;
min-height: 20rem;
display:flex;
justify-content: center;
align-items: center;
h1{
  font-size: 2rem;
}


`
const UserProfileStyles = styled.div`
  .mainProfile {
    width: 100%;
    height: 36.3125rem;
    box-shadow: 0px -1px 9px var(--font-dark-color);
    background-color: var(--primary-background-color);
    .profilePhotos {
      width: 100%;
      height: 21.625rem;
      .coverPhoto {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          border-bottom-right-radius: 0.8rem;
          border-bottom-left-radius: 0.8rem;
        }
        .cameraBtn {
          position: absolute;
          height: 2rem;
          width: 10rem;

          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: var(--primary-background-color);

          left: 68%;

          top: 18rem;
          border-radius: 6px;
          .css-i4bv87-MuiSvgIcon-root {
            width: 0.8em;
            height: 0.8em;
          }
          :hover {
            background-color: var(--background-gray-color);
            cursor: pointer;
          }
          span {
            color: var(--font-dark-color);
            padding-bottom: 3px;
            font-size: 14px;
            font-weight: 650;
          }
        }
      }
      .avatar {
        width: 11rem;
        height: 11rem;
        text-align: center;
        position: absolute;
        left: 44%;
        top: 12rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 4px solid var(--border-color);
          box-shadow: 0px 1px 10px var(--shadow-5);
        }
        .cameraBtn {
          position: absolute;
          left: 8.5rem;
          top: 7.6rem;
          width: 2.2rem;
          border-radius: 50%;
          padding-top: 7px;
          background-color: var(--background-gray-color);
          :hover {
            background-color: var(--background-gray-color);
            cursor: pointer;
          }
        }
      }
    }
    .profileBio {
      padding: 0 2rem;

      .Bio {
        width: inherit;
        height: 11.2rem;

        flex-basis: 60%;
        & > div {
          text-align: center;
          height: 8.6rem;
          padding-top: 18px;
          h1 {
            color: var(--font-dark-color);
            font-size: 2em;
          }
          & > div {
            line-height: 25px;
            margin-top: 0px;
            font-size: 1.1rem;
            color: var(--ofont-color1);
            span {
              color: var(--ofont-primary-color);
              font-size: 0.9rem;
              font-weight: 650;
              :hover {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }
        flex-basis: 60%;
      }
      .profileMenuItems {
        display: flex;
        border-top: 1px solid var(--border-color2);
        padding: 4px 4px 0px 4px;

        height: 3.4rem;

        column-gap: 12px;

        align-items: center;
        .specialC {
          padding: 0;
          width: 8.4rem;
          :hover {
            background-color: var(--primary-background-color);
          }
          & > div {
            display: flex;
            justify-content: space-between;
            width: 8rem;
            padding: 8px;
            align-items: center;
            background-color: var(--primary-color);
            height: 2.4rem;
            border-radius: 9px;
            color: var(--border-color);
            :hover {
              background-color: var(--secondary-6);
            }
          }
        }
        & > div {
          min-width: 3rem;
          padding: 0px 0.6rem;
          height: 100%;
          color: var(--ofont-color1);
          display: flex;

          align-items: center;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          :hover {
            background-color: var(--background-gray-color);
            cursor: pointer;
          }
        }
        .menuflex {
          display: flex;
          align-items: center;
          background-color: var(--background-gray-color);
          height: 2rem;
          padding: 0 3px;
          font-size: 14px;
          font-weight: 650;
          width: 100%;
          border-radius: 3px;
          justify-content: space-around;
          .css-i4bv87-MuiSvgIcon-root {
            width: 0.7em;
            height: 0.7em;
          }
        }
        .primarybgc {
          border-radius: 8px;
          background-color: var(--primary-color);
          color: var(--ofont-color2);
          height: 2rem;
          padding: 0 3px;
          font-size: 14px;
          font-weight: 650;
          justify-content: space-around;
          span {
            color: var(--ofont-color2);
          }
          :hover {
            background-color: var(--secondary-6);
          }
        }
        .editFont {
          color: var(--font-dark-color);
        }
        .menu {
          min-width: 3rem;
          padding: 0;
          & > div {
            width: 100%;
            justify-content: center;
            background-color: var(--background-gray-color);
            height: 2rem;
            display: flex;
            align-items: center;
          }
          :hover {
            background-color: var(--primary-background-color);
          }
        }
      }
    }
  }
`;
const PostCompoSyled = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  margin-top: 1rem;
  grid-gap:1rem;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    height: fit-content;
  }
`;


export default FriendsProfile;



