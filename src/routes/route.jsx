import React from "react";
import { Switch, Route } from "react-router-dom";
import FriendsAll from "../components/Friends/FriendsAll";
import SignUp from "../components/Login-Signup/SignUp";
import HomePage from "./HomePage";
import FriendsCompo from "../components/userprofile/FriendsCompo";
import Intro from "../components/userprofile/Intro";
import PhotosComp from "../components/userprofile/PhotosComp";
import UserProfile from "../components/userprofile/UserProfile";
import Wall from "../components/Wall/Wall";
<<<<<<< HEAD
import FriendsProfile from "../components/FriendsProfile/FriendsProfile";
=======
import NavBar from "../components/navbar/NavBar";
import UserPage from "./UserPage";

>>>>>>> f335be3c19877c038da90ae0445a397398075688
const Router = () => {
  const [menu, setMenu] = React.useState(false);
  return (
    <div>
      <Switch>
        <Route path="/login">
          <SignUp />
        </Route>
        <Route exact path="/">
          {/* <NavBar setMenu={setMenu} menu={setMenu} /> */}
          <HomePage />
        </Route>
        <Route path="/friends">
          <NavBar setMenu={setMenu} menu={setMenu} />
          <FriendsAll />
        </Route>
        <Route path="/messenger">
          <NavBar setMenu={setMenu} menu={setMenu} />
          <Wall />
        </Route>
        <Route path="/profile">
          <NavBar setMenu={setMenu} menu={setMenu} />
          <UserProfile />

        </Route>
        <Route path='/facebook/:id' >
          <FriendsProfile />
        </Route>
        <Route path="/user/:id">
          <UserPage/>
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
