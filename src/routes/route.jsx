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

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Wall />
        </Route>
        <Route path="/login">
          <SignUp />
        </Route>
        <Route path="/wall">
          <Wall />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/friends">
          <FriendsAll />
        </Route>
        <Route path="/messenger">
          <Wall />
        </Route>
        <Route path="/profile">
          <UserProfile />

        </Route>
      </Switch>
    </div>
  );
};

export default Router;
