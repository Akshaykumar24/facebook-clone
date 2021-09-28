import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import Login from "./Login";

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
  const [isCreateClick, setIsCreateClick] = useState(true);
  const [signUpForm, setSignUpForm] = React.useState(initFormSignup);
  const [logInForm, setLogInForm] = React.useState(initFormLogin);

  const { first_name, last_name, email, password } = signUpForm;

  const [dob, setDob] = useState("1/June/1950");
  const [day, setDay] = useState("1");
  const [mon, setMon] = useState("June");
  const [year, setYear] = useState("1950");
  //   const [reset, setReset] = useState(false);

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
    axios
      .post(`${url}/api/register`, signUpForm)
      .then((res) => console.log(res))
      .then(setSignUpForm({}));
  };

  const handleLogin = () => {
    console.log(logInForm);
    axios
      .post(`${url}/api/login`, logInForm)
      .then((res) => console.log(res))
      .then(setLogInForm({}));
  };

  //   const handleCreateClick = () => {
  //     setIsCreateClick(true);
  //   };
  const handleCloseClick = () => {
    console.log(signUpForm, dob);
    //setIsCreateClick(false);
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
    <>
      <div>
        <div className="loginPageContainer flexBox"></div>
        <div className="LoginPageFooter">
          <p>English (UK)</p>
          <p>Facebook © 2021</p>
        </div>
      </div>
      <Login
        handleLogin={handleLogin}
        handleLoginForm={handleLoginForm}
        email={logInForm.email}
        password={logInForm.password}
      />
      {isCreateClick && (
        <div className="signUpModel">
          <div className="signUpContainer">
            <h2 className="signUpH2">Sign Up</h2>
            <p className="signUpP">It's quick and easy.</p>
            <hr className="signUpHr" />
            {/* <br /> */}
            <button className="signUpbuttonClose" onClick={handleCloseClick}>
              Close
            </button>
            <div className="nameSignUpContainer">
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
            <div className="dobSignUpContainer">
              <p>Date of birth</p>
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
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="MALE"
                  name="gender"
                />
                <p>Male</p>
              </div>
              <div>
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="FEMALE"
                  name="gender"
                />
                <p>Female</p>
              </div>
              <div>
                <input
                  type="radio"
                  onChange={(e) => handleSignUpForm(e)}
                  value="OTHERS"
                  name="gender"
                />
                <p>Others</p>
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
              "Sign-up"
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
