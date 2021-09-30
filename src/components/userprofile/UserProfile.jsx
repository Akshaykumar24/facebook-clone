import React from "react";
import styled from "styled-components";
import { MainLayout } from "../../styles/layouts";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import BasicModal from "./BasicModal";
import EditProfieModal from "./EditProfile";
import Intro from './Intro'
import PhotosComp from './PhotosComp'
import FriendsCompo from './FriendsCompo'

function UserProfile() {
  const [posts, setPosts] = useState(true);
  const [friends, setFriends] = useState(false);
  const [photos, setPhotos] = useState(false);

  const [title, setTitle] = useState("");
  const [btnText, setBtnText] = useState("")
  const [showUpdateCoverPhotoModal, setShowUpdateCoverPhotoModal] = useState(false);
  const [showUpdateProfilePhotoModal, setShowUpdateProfilePhotoModal] = useState(false)
  const [editProfileOpen, setEditProfileOpen] = useState(false)

  const handleEditProfileOpen = () => setEditProfileOpen(true);
  const handleEditProfileClose = () => setEditProfileOpen(false);

  const [open, setOpen] = useState(false);
  const handleCoverPhotoModalOpen = () => {
    setTitle("Edit Cover Photo");
    setBtnText("Cover Photo")
    setOpen(true);

  }
  const handleProfilePhotoModalOpen = () => {
    setTitle("Edit Profile Photo");
    setBtnText("Profile Photo")
    setOpen(true);

  }
  const handlePhotoModalClose = () => setOpen(false);




  const handleBasicModal = () => {

  }

  const handleProfilesMenu = (e) => {
    if (e.target.textContent === "Posts") {
      setPosts(true);
      setPhotos(false);
      setFriends(false);
    } else if (e.target.textContent === "Friends") {
      setFriends(true);
      setPosts(false);
      setPhotos(false);
    } else if (e.target.textContent === "Photos") {
      setPhotos(true);
      setFriends(false);
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
                src="https://th.bing.com/th/id/R.b60ebb76818e10a1ffeb1d76ef807568?rik=BfJWM%2bFjq3YsSA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fFacebook-Covers-004.jpg&ehk=QyHMcIYCHj1%2bqMrmjGWLcUOKe7Zi8kTKnVJ2G1zuQqA%3d&risl=&pid=ImgRaw&r=0"
                alt="coverPhoto"
              />
              <div onClick={handleCoverPhotoModalOpen} className="cameraBtn">
                <CameraAltIcon /> <span>Edit Cover Photo</span>
              </div>
            </div>
            <div className="avatar">
              <img
                src="https://th.bing.com/th/id/R.56fa805242ca705c112c21e9142391c6?rik=0FGHjmAsLgoKhQ&riu=http%3a%2f%2fsguru.org%2fwp-content%2fuploads%2f2017%2f04%2fattitude-boys-profile-pics-for-Facebook-20.jpg&ehk=A%2bCtAIdAM172Ttozp8O2Yieal74Rvzj2O%2fHwjJnGrkQ%3d&risl=&pid=ImgRaw&r=0"
                alt="profilePhoto"
              />
              <div onClick={handleProfilePhotoModalOpen} className="cameraBtn">
                <CameraAltIcon />
              </div>
            </div>
          </div>
          <BasicModal title={title} btnText={btnText} handleClose={handlePhotoModalClose} open={open} />
          <EditProfieModal handleEditProfileClose={handleEditProfileClose} editProfileOpen={editProfileOpen} />
          <div className="profileBio">
            <div className="Bio">
              <div>
                <h1>Omkar Gavade</h1>
                <div>
                  <p>You have to be odd to be number one</p>
                  <p>Commited with life</p>
                  <p>Dreamer,quick learner,proud son</p>
                  <span className="editBio">Edit</span>
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
              <div onClick={handleProfilesMenu}>About</div>
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
                  <AddCircleIcon /> <span> Add to Story</span>
                </div>
              </div>
              <div className="specialC">
                <div onClick={handleEditProfileOpen} className="menuflex editFont">
                  <EditIcon /> <span>Edit Profile</span>
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
      <Intro />
      <PhotosComp />
      <FriendsCompo />
    </UserProfileStyles>
  );
}

const UserProfileStyles = styled.div`
  .mainProfile {
    width: 100%;
    height: 35.3125rem;
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
        top: 11.5rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 4px solid var(--border-color);
        }
        .cameraBtn {
          position: absolute;

          left: 8.5rem;
          top: 8.6rem;
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
        height: 9.8rem;
        padding: 0px 25%;
        & > div {
          text-align: center;
          height: 8.6rem;

          padding-top: 5px;
          h1 {
            color: var(--font-dark-color);
          }
          & > div {
            line-height: 3px;
            margin-top: -15px;
            font-size: 1.1rem;
            color: var(--font-light-color);
            span {
              color: var(--primary-color);
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

        height: 3.5rem;

        column-gap: 9px;

        align-items: center;
        .specialC {
          padding: 0;
          width: 8.4rem;
          :hover {
            background-color: var(--primary-background-color);
          }
        }
        & > div {
          min-width: 3rem;
          padding: 0px 0.6rem;
          height: 100%;
          color: var(--font-light-color);
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
          color: var(--primary-background-color);
          height: 2rem;
          padding: 0 3px;
          font-size: 14px;
          font-weight: 650;
        }
        .editFont{
          color: var(--font-dark-color)
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

export default UserProfile;
