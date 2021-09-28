// import "./styles/App.css";
// import UserProfile from "./components/userprofile/UserProfile";
import Intro from "./components/userprofile/Intro";
import PhotosComp from "./components/userprofile/PhotosComp";
function App() {
  return <div className="App">
    {/* <UserProfile /> */}
    <Intro />
    <PhotosComp />
  </div>;
}

export default App;
