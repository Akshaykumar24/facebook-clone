import React from "react";
import HomePageCenter from "../components/HomePageCenter/HomePageCenter";
import SideBar from "../components/SideBar/SideBar";
import styled from "styled-components";
import Story from "../components/Story/Story";
import Home from "../components/Active/Pages/Home";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const history = useHistory();
  const select = useSelector((state) => state);
  if (select.auth.token === "") {
    history.push("/login");
  }
  return (
    // <Container>
    //   <SideBar />
    //   <Cent>
    //     <Story />
    //     <HomePageCenter />
    //   </Cent>
    //   <div></div>
    // </Container>
    <Home />
  );
};

export default HomePage;

const Cent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  > :last-child {
    width: 45%;
    margin: auto;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  > :last-child {
    flex: 0.7;
    position: fixed;
    top: 50px;
  }
  > :first-child {
    flex: 1;
    position: fixed;
    top: 50px;
  }
`;
