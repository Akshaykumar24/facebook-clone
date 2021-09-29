// import "./styles/App.css";
import UserProfile from "./components/userprofile/UserProfile";
import Intro from "./components/userprofile/Intro";
import PhotosComp from "./components/userprofile/PhotosComp";
import FriendsCompo from "./components/userprofile/FriendsCompo";
import EditProfieModal from "./components/userprofile/EditProfile";

function App() {
  return <div className="App">
    <UserProfile />
    {/* 
    <Intro />
    <PhotosComp />
    <FriendsCompo /> */}
    {/* <EditProfieModal /> */}
  </div>;
}

export default App;
