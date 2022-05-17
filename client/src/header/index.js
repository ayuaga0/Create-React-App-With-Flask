import React, {useEffect} from "react";
import styled from "styled-components";
import { MainLogo } from "../assets";
import Navigation from "./navigation";

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
`;

const Logo = styled.div`
  margin-left: 20px;
  svg {
    width: 80px;
    height: 80px;
  }
`;

const MainHeader = () => {

  useEffect(() => {
    fetch("/index").then((res) => {
      res.json()
    }).then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <HeaderContainer>
      <Logo>
        <MainLogo />
      </Logo>
      <Navigation />
    </HeaderContainer>
  );
};

export default MainHeader;
