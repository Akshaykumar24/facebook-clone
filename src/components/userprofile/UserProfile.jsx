import React from "react";
import styled from "styled-components";
import { MainLayout } from "../../styles/layouts";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState, useEffect } from "react";
import BasicModal from "./BasicModal";
import EditProfieModal from "./EditProfile";
import Intro from "./Intro";
import PhotosComp from "./PhotosComp";
import FriendsCompo from "./FriendsCompo";
import { getData } from "../../utils/localStorage";
import { MainPostLayout } from "../../styles/layouts";
import AboutCompo from "./AboutCompo";
import AllFriendsCompo from "./AllFriendsCompo";
import TextField from "@mui/material/TextField";
import AllPhotosCompo from "./AllPhotosCompo";
import { updateUser, getAllUserPosts, getOtherUsersPosts, getUserPosts } from "../../redux/auth/action";
import { useDispatch } from 'react-redux'
import PostCard from '../PostCard/PostCard'
import { logUser } from "../../redux/auth/action";
import PostForm from "../PostForm/PostForm";

function UserProfile() {

  const dispatch = useDispatch();

  // console.log(user)
  const [posts, setPosts] = useState(true);
  const [friends, setFriends] = useState(false);
  const [photos, setPhotos] = useState(false);
  const [about, setAbout] = useState(false);
  const [title, setTitle] = useState("");
  const [btnText, setBtnText] = useState("");
  const [editBio, setEditBio] = useState(false);


  const refreshPage = () => {
    window.location.reload();
  };

  const defaultUserPic = {
    coverPic:
      "https://th.bing.com/th/id/R.b60ebb76818e10a1ffeb1d76ef807568?rik=BfJWM%2bFjq3YsSA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fFacebook-Covers-004.jpg&ehk=QyHMcIYCHj1%2bqMrmjGWLcUOKe7Zi8kTKnVJ2G1zuQqA%3d&risl=&pid=ImgRaw&r=0",
    profilePic:
      "https://th.bing.com/th/id/R.56fa805242ca705c112c21e9142391c6?rik=0FGHjmAsLgoKhQ&riu=http%3a%2f%2fsguru.org%2fwp-content%2fuploads%2f2017%2f04%2fattitude-boys-profile-pics-for-Facebook-20.jpg&ehk=A%2bCtAIdAM172Ttozp8O2Yieal74Rvzj2O%2fHwjJnGrkQ%3d&risl=&pid=ImgRaw&r=0",
  };

  const [editProfileOpen, setEditProfileOpen] = useState(false);

  const handleEditProfileOpen = () => setEditProfileOpen(true);
  const handleEditProfileClose = () => setEditProfileOpen(false);
  // useEffect(() => {

  // }, []);
  // function getUsersData() {
  //   const id = getData("userId")
  //   console.log(id, "id")
  //   dispatch(getUser(id))
  // }

  // ;
  // getUsersData();
  useEffect(() => {
    const data = getData("login");
    dispatch(logUser(data));
  }, []);
  // const {
  //   auth: { user },
  // } = useSelector((state) => state, shallowEqual);

  const [userData, setUserData] = useState(
    getData("userData").user
      ? getData("userData").user
      : getData("userData").userOnline
  );
  const [userPosts, setUserPosts] = useState(
    getData("userPosts")?.posts ? getData("userPosts").posts : []
  )
  const [mainuserPosts, setMainuserPosts] = useState(
    getData("userPosts")?.posts ? getData("userPosts").posts : []
  )


  const [bio, setBio] = useState(userData.bio ? userData.bio : "")
  const [remainingChar, setRemainingChar] = useState(100 - (userData?.bio?.length ? userData?.bio?.length : 0))
  const handleBioChange = (e) => {
    setBio(e.target.value)
    setRemainingChar(100 - e.target.value.length)
  }
  const handleEditBio = () => {
    setEditBio(!editBio)
    setBio(userData.bio)

  }


  // async function getusersData(id) {
  //   await axios.get(`http://localhost:2424/api/user/${id}`).then(({ data }) => {
  //     handleUserDataContext(data)
  //   })
  // }
  // getusersData(id)

  const handleUpdateBio = () => {
    dispatch(updateUser({ "bio": bio }, userData._id))
    setTimeout(() => {
      refreshPage()
    }, 1000)

  }
  const [open, setOpen] = useState(false);
  const handleCoverPhotoModalOpen = () => {
    setTitle("Edit Cover Photo");
    setBtnText("Cover Photo");
    setOpen(true);
  };
  const handleProfilePhotoModalOpen = () => {
    setTitle("Edit Profile Photo");
    setBtnText("Profile Photo");
    setOpen(true);
  };
  const handlePhotoModalClose = () => setOpen(false);
  const handleSeeAllfriends = () => {
    setFriends(true);
    setPosts(false);
    setAbout(false);
    setPhotos(false);
  };
  const handleSeeAllPhotos = () => {
    setPhotos(true);
    setFriends(false);
    setPosts(false);
    setAbout(false);
  };
  const handleProfilesMenu = (e) => {
    if (e.target.textContent === "Posts") {
      setPosts(true);
      setPhotos(false);
      setAbout(false);
      setFriends(false);
    } else if (e.target.textContent === "Friends") {
      setFriends(true);
      setPosts(false);
      setAbout(false);
      setPhotos(false);
    } else if (e.target.textContent === "Photos") {
      setPhotos(true);
      setFriends(false);
      setPosts(false);
      setAbout(false);
    } else if (e.target.textContent === "About") {
      setPhotos(false);
      setFriends(false);
      setAbout(true);
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
              <div onClick={handleCoverPhotoModalOpen} className="cameraBtn">
                <CameraAltIcon /> <span>Edit Cover Photo</span>
              </div>
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
              <div onClick={handleProfilePhotoModalOpen} className="cameraBtn">
                <CameraAltIcon />
              </div>
            </div>
          </div>
          {open ? (
            <BasicModal
              title={title}
              btnText={btnText}
              handleClose={handlePhotoModalClose}
              open={open}
              userData={userData}
              refreshPage={refreshPage}
            />
          ) : (
            ""
          )}
          {editProfileOpen ? (
            <EditProfieModal
              handleEditProfileClose={handleEditProfileClose}
              editProfileOpen={editProfileOpen}
              userData={userData}
              refreshPage={refreshPage}
            />
          ) : (
            ""
          )}

          <div className="profileBio">
            <div className="Bio">
              <div>
                <h1>{userData.first_name + " " + userData.last_name}</h1>
                {editBio ? <EditBioStyled>
                  <div>
                    <TextField
                      id="outlined-multiline-flexible"

                      multiline
                      minRows={2}
                      maxRows={2}
                      maxLength={4}
                      fullWidth
                      value={bio}
                      onChange={handleBioChange}
                      defaultValue={bio}
                      inputProps={{
                        maxLength: 100
                      }}
                    />

                  </div>
                  <div><span>{remainingChar} Characters remaining</span></div>
                  <div>
                    <div></div>
                    <div>
                      <button onClick={handleEditBio} >Cancel</button>
                    </div>
                    <div>
                      <button onClick={handleUpdateBio}>Save</button>
                    </div>
                  </div>
                </EditBioStyled> : <div>
                  <p>{userData.bio}</p>
                  <span onClick={handleEditBio} className="editBio">Edit</span>
                </div>}

              </div>
            </div>
            <div className="profileMenuItems">
              <div
                className={`${posts ? "menuBorder-bottom" : ""}`}
                onClick={handleProfilesMenu}
              >
                Posts
              </div>
              <div
                className={`${about ? "menuBorder-bottom" : ""}`}
                onClick={handleProfilesMenu}
              >
                About
              </div>
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
                <div
                  onClick={handleEditProfileOpen}
                  className="menuflex editFont"
                >
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
              handleEditProfileOpen={handleEditProfileOpen}
            />
            <PhotosComp handleSeeAllPhotos={handleSeeAllPhotos} refreshPage={refreshPage} />
            <FriendsCompo handleSeeAllfriends={handleSeeAllfriends} friends={userData.friends} userData={userData} />
          </div>
          <div>
            <PostForm user={userData} />
            <FilterPostsStyled>
              <div><h3>Posts</h3></div>
              <div>
                <div><span>Filter By</span></div>
                <div><button onClick={() => {
                  dispatch(getUserPosts(userData._id))
                  setUserPosts(getData("userPosts")?.posts ? getData("userPosts").posts : [])

                }}>You</button><button onClick={() => {
                  dispatch(getAllUserPosts())
                  setUserPosts(getData("allUserPosts")?.posts ? getData("allUserPosts").posts : [])

                }}>Anyone</button><button onClick={() => {
                  dispatch(getOtherUsersPosts(userData._id))
                  setUserPosts(getData("otherUserPosts")?.posts ? getData("otherUserPosts").posts : [])

                }}>Others</button></div>
              </div>
            </FilterPostsStyled>
            {userPosts.length >= 1 ? userPosts.map((el) => {
              return <PostCard post={el} user={el.user_id} />
            }) : <UserNotPostingStyled><h1>You have not posted yet.</h1></UserNotPostingStyled>}
          </div>
        </PostCompoSyled> : ""}
        {about ? <AboutCompo handleEditProfileOpen={handleEditProfileOpen} /> : ""}
        {friends ? <AllFriendsCompo /> : ""}
        {photos ? <AllPhotosCompo userPosts={mainuserPosts} /> : ""}
      </MainPostLayout>
      {/* <EmojiMart /> */}
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
const FilterPostsStyled = styled.div`
    width: 100%;
    display: grid;
    height: 8rem;
padding: 15px;
box-shadow: 0px 0px 4px var(--icons-gray-color);
  border-radius: 1rem;
    background-color: var(--border-color);
    grid-template-rows: 1fr 2fr;
&>div:nth-child(1) {
  display: flex;
  justify-content:start;
  align-items: center;
  h3{
    font-size: 1.4rem;
    color:var(--ofont-dark-color) ;
}
}
&>div:nth-child(2) {
  display: flex;
  justify-content:space-between;
  align-items: center;
  &>div:nth-child(1){
    display: flex;
    justify-content: start;
    align-items: center;
    span{

    color: var(--ofont-color1);
    font-weight: 600;

    }
  }
  &>div:nth-child(2){
    width: 20rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
         height: 2rem;
    width: 6rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--ofont-color2);
    cursor: pointer;
    font-weight: bold;
    outline: none;
    border: none;
    font-size: 1.1rem;
    }

  }
}




`

const EditBioStyled = styled.div`


display: grid;
  
    justify-content: center;
    align-items: center;
&>div:nth-child(1){
      width: 20rem;
    height: 4rem;

}
&>div:nth-child(2){
height: 1.2rem;
    text-align: end;
    margin-top: 6px;
    span{
      font-size: 11px !important;
      color: var(--ofont-color1) !important;
      :hover{
        text-decoration:none !important;
      }
    }

}
&>div:nth-child(3){
    height: 2.7rem;
    grid-template: 1fr 1fr;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 2px;
    &>div{
      display: flex;
      justify-content: center;
      align-items: center;
      button{
     height: 2rem;
    padding: 5px;
    border: none;
    background-color: var(--background-gray-color);
    :hover{
      background-color: var(--hover-effect)
    }

      }
    }
}


`
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




const UserProfileStyles = styled.div`
  .mainProfile {
    width: 100%;
    height: 37.3125rem;
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
            color: var(--ofont-dark-color);
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
        height: 12.2rem;

        flex-basis: 60%;
        & > div {
          text-align: center;
          height: 8.6rem;
          padding-top: 18px;
          h1 {
            color: var(--ofont-dark-color);
            font-size: 2em;
          }
          & > div {
               line-height: 25px;
    margin-top: 0px;
    font-size: 1.1rem;
    color: var(--ofont-color1);
    display: grid;
    justify-content: center;
            p{
              min-height: 6rem;
              width: 22rem;
              word-wrap: break-word;
            }
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

        column-gap: 11px;

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
          span {
            color: var(--ofont-color2);
          }
        }
        .editFont {
          color: var(--ofont-dark-color);
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
