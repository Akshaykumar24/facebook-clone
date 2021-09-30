import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import Login from "./Login";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logUser, regUser } from "../../redux/auth/action";

const initFormSignup = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  gender: "",
};
const initFormLogin = {
  email: "",
  password: "",
};
function SignUp() {
  const [isCreateClick, setIsCreateClick] = useState(false);
  const [signUpForm, setSignUpForm] = React.useState(initFormSignup);
  const [logInForm, setLogInForm] = React.useState(initFormLogin);

  const { first_name, last_name, email, password } = signUpForm;

  const [dob, setDob] = useState("1/June/1950");
  const [day, setDay] = useState("1");
  const [mon, setMon] = useState("June");
  const [year, setYear] = useState("1950");
  //   const [reset, setReset] = useState(false);
  const history = useHistory();
  // From Redux
  const state = useSelector((state) => state);
  const all = state.auth;
  const load = state.auth.Load;
  console.log(all);
  const dispatch = useDispatch();

  const handleSignUpForm = (e) => {
    const { value, name } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const handleLoginForm = (e) => {
    const { value, name } = e.target;
    setLogInForm({ ...logInForm, [name]: value });
  };

  const handleChangeDob = (e) => {
    if (e.target.name === "date_of_birth:day") {
      setDay(e.target.value);
    } else if (e.target.name === "date_of_birth:mon") {
      setMon(e.target.value);
    } else if (e.target.name === "date_of_birth:year") {
      setYear(e.target.value);
    }
  };

  useEffect(() => {
    setDob(day + "/" + mon + "/" + year);
  }, [day, mon, year]);

  const handleSingUp = () => {
    setSignUpForm({ ...signUpForm, dob: dob });
    dispatch(regUser(signUpForm));
    // axios
    //   .post(`${url}/api/register`, signUpForm)
    //   .then((res) => console.log(res))
    //   .then(setSignUpForm({}));
  };

  const handleLogin = () => {
    console.log(logInForm);
    dispatch(logUser(logInForm));
  };
  if (all.reg && !all.Load && !all.Error) {
    history.push("/profile");
  } else if (all.token !== "") {
    history.push("/");
  }
  const handleCreateClick = () => {
    setIsCreateClick(true);
  };
  const handleCloseClick = () => {
    //console.log(signUpForm, dob);
    setIsCreateClick(false);
  };

  const years = new Array(71).fill(1950);
  const days = new Array(31).fill(1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Cont>
      <Logger>
        <div>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="logo"
          />
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div>
          <Login
            handleLogin={handleLogin}
            handleLoginForm={handleLoginForm}
            email={logInForm.email}
            password={logInForm.password}
            load={load}
          />
          <a href="/">Forgotten Password ?</a>
          <br />
          <hr />
          <br />
          <button onClick={handleCreateClick}>Create New Account</button>
        </div>
      </Logger>
      {isCreateClick && (
        <Sign>
          <div>
            <h2>Sign Up</h2>
            <p className="signUpP">It's quick and easy.</p>
            {/* <hr /> */}
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/Q0G2UVjVQ4_.png"
              alt="x"
              onClick={handleCloseClick}
            />
            <div>
              <input
                type="text"
                placeholder="First name"
                value={first_name}
                name="first_name"
                onChange={handleSignUpForm}
              />
              <input
                type="text"
                placeholder="Surname"
                value={last_name}
                name="last_name"
                onChange={handleSignUpForm}
              />
            </div>
            <input
              className="numPassInput"
              type="email"
              value={email}
              placeholder="Email address"
              name="email"
              onChange={handleSignUpForm}
            />
            <input
              className="numPassInput"
              type="password"
              value={password}
              placeholder="New password"
              name="password"
              onChange={handleSignUpForm}
            />
            <p>Date of birth</p>
            <div className="dobSignUpContainer">
              <select
                onChange={(e) => handleChangeDob(e)}
                className="first"
                name="date_of_birth:day"
                tabIndex="7"
              >
                {days.map((el, i) => (
                  <option key={el + i} value={el + i}>
                    {el + i}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => handleChangeDob(e)}
                name="date_of_birth:mon"
                tabIndex="8"
              >
                {months.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => handleChangeDob(e)}
                name="date_of_birth:year"
                tabIndex="9"
              >
                {years.map((el, i) => (
                  <option key={el + i} value={el + i}>
                    {el + i}
                  </option>
                ))}
              </select>
            </div>
            <p className="genderPtag">Gender</p>
            <div className="dobSignUpContainer flexBox">
              <div>
                <p>Male</p>
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="MALE"
                  name="gender"
                />
              </div>
              <div>
                <p>Female</p>
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="FEMALE"
                  name="gender"
                />
              </div>
              <div>
                <p>Others</p>
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="OTHERS"
                  name="gender"
                />
              </div>
            </div>
            <p className="termsSignUpContainer">
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy.
            </p>
            <button
              //disabled={isLoading}
              className="signUpButton"
              onClick={handleSingUp}
            >
              Sign-up
            </button>
          </div>
        </Sign>
      )}
    </Cont>
  );
}

export default SignUp;

const Cont = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 6% 5% 0;
  background-color: rgb(240, 242, 245);
`;

const Logger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 70%;
  margin: auto;
  padding: 5% auto;
  > div:nth-child(1) {
    width: 55%;
    text-align: left;
    margin: auto;
    > img {
      height: 106px;
      margin: -28px;
    }
    > h2 {
      font-size: 28px;
      font-weight: normal;
      line-height: 32px;
    }
  }
  > div:nth-child(2) {
    width: 396px;
    text-align: center;
    margin: auto;
    border: none;
    margin: 40px 0 0;
    padding: 10px 0 18px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);

    > a {
      text-decoration: none;
      margin: 20px auto;
      font-size: 14px;
      font-weight: 400;
    }
    > hr {
      width: 90%;
      margin: 20px auto 10px;
      border: 1px solid rgb(230, 230, 230);
    }
    > button {
      background-color: rgb(66, 183, 42);
      border: none;
      border-radius: 6px;
      font-size: 16px;
      line-height: 48px;
      font-weight: 700;
      padding: 0 16px;
      width: 200px;
      margin: 0 auto 10px;
      color: #fff;
    }
    > button:hover {
      background-color: rgb(54, 164, 32);
    }
  }
`;
const Sign = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(252, 252, 253, 0.8);
  position: absolute;
  top: 0;
  left: 0;

  > div {
    opacity: 1;
    padding: 10px;
    max-width: 420px;
    background-color: white;
    position: relative;
    top: 17%;
    left: 35%;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%), 0 8px 16px rgb(0 0 0 / 25%);

    > h2 {
      font-size: 32px;
      font-family: SFProDisplay-Bold, Helvetica, Arial, sans-serif;
      line-height: 38px;
      margin: 0 10px;
      font-weight: 650;
    }
    input {
      font-size: 14px;
      padding: 8px 16px;
      width: 90%;
      height: 18px;
      margin: 7px 5px;
      border-radius: 5px;
      background-color: rgb(238, 238, 238);
      border: 1px solid rgb(190, 190, 190);
    }
    > input:focus {
      outline: 1px solid #1877f2;
    }
    > p {
      font-size: 12px;
      line-height: 16px;
      padding: 0 10px;
    }
    > :nth-child(2) {
      font-size: 15px;
      line-height: 24px;
      padding-bottom: 15px;
      margin: 10px;
      border-bottom: 1px solid rgb(212, 212, 212);
    }
    > img {
      position: absolute;
      right: 12px;
      top: 10px;
    }
    > div {
      display: flex;
      > select {
        width: 30%;
        margin: 0 1.5%;
        font-size: 16px;
        padding: 8px;
        border-radius: 5px;
        border: 1px solid rgb(204, 208, 213);
      }
      > div {
        width: 30%;
        margin: 0 1.5%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 5px;
        border: 1px solid rgb(204, 208, 213);
        > p {
          flex: 4;
          margin: 8px;
        }
        > input {
          flex: 1;
          height: auto;
        }
      }
    }
    > :last-child {
      background-color: rgb(66, 183, 42);
      border: none;
      border-radius: 6px;
      font-size: 18px;
      line-height: 38px;
      font-weight: 700;
      padding: 0 16px;
      width: 210px;
      margin: 0 25%;
      color: #fff;
    }
    > :last-child:hover {
      background-color: rgb(54, 164, 32);
    }
  }
`;
