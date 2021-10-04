import React from "react";
import { Switch, Route } from "react-router-dom";
import FriendsAll from "../components/Friends/FriendsAll";
import SignUp from "../components/Login-Signup/SignUp";
import HomePage from "./HomePage";

import UserProfile from "../components/userprofile/UserProfile";
import Wall from "../components/Wall/Wall";
import FriendsProfile from "../components/FriendsProfile/FriendsProfile";
import NavBar from "../components/navbar/NavBar";
import Messenger from "../components/Socket/Messenger";

import UserPage from "./UserPage";
import { useEffect, useState } from "react";
const Router = () => {
  const [menu, setMenu] = React.useState(false);
  const [theme, setTheme] = useState("light-theme");
  const [checked, setChecked] = useState(false);
  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(true);
    } else {
      setTheme("light-theme");
      setChecked(false);
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <div className="theme">
      <Switch>
        <Route path="/login">
          <SignUp />
        </Route>
        <Route exact path="/">
          {/* <NavBar setMenu={setMenu} menu={setMenu} /> */}
          <HomePage />
        </Route>
        <Route path="/friends">
          <NavBar
            themeToggler={themeToggler}
            checked={checked}
            setMenu={setMenu}
            menu={setMenu}
          />
          <FriendsAll />
        </Route>
        <Route path="/messenger">
          <NavBar setMenu={setMenu} menu={setMenu} />
          <Messenger />
          {/* <Chat /> */}
          <NavBar
            themeToggler={themeToggler}
            checked={checked}
            setMenu={setMenu}
            menu={setMenu}
          />
          <Wall />
        </Route>
        <Route path="/profile">
          <NavBar
            themeToggler={themeToggler}
            checked={checked}
            setMenu={setMenu}
            menu={setMenu}
          />
          <UserProfile />
        </Route>
        <Route path="/facebook/:id">
          <NavBar setMenu={setMenu} menu={setMenu} />
          <FriendsProfile />
        </Route>
        <Route path="/user/:id">
          <UserPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
