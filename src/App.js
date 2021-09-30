import UserProfile from "./components/userprofile/UserProfile";
import Intro from "./components/userprofile/Intro";
import PhotosComp from "./components/userprofile/PhotosComp";
import FriendsCompo from "./components/userprofile/FriendsCompo";
import Router from "./routes/route";
function App() {
  return (
    <div className="App">
      {/* <UserProfile />
    <Intro />
    <PhotosComp />
    <FriendsCompo /> */}
      <Router />
    </div>
  );
}

export default App;
