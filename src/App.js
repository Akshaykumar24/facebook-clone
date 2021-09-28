// import "./styles/App.css";
import UserProfile from "./components/userprofile/UserProfile";
import Intro from "./components/userprofile/Intro";
import PhotosComp from "./components/userprofile/PhotosComp";
import FriendsCompo from "./components/userprofile/FriendsCompo";
function App() {
  return <div className="App">
    <UserProfile />
    <Intro />
    <PhotosComp />
    <FriendsCompo />
  </div>;
}

export default App;
