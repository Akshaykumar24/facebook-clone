
import Router from "./routes/route";
import AboutCompo from "./components/userprofile/AboutCompo";
import AllFriendsCompo from "./components/userprofile/AllFriendsCompo";
import AllPhotosCompo from "./components/userprofile/AllPhotosCompo";
import { useState, useEffect } from "react";
function App() {

  return (
    <div className="App">

      <Router />
      {/* <AboutCompo /> */}
      {/* <AllFriendsCompo /> */}
      {/* <AllPhotosCompo /> */}
    </div>
  );
}

export default App;
