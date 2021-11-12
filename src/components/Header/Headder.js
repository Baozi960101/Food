import React, { useEffect, useState } from "react";
import styled from "styled-components";
import down from "./images/down.svg";
import menu from "./images/menu.svg";
import { Link } from "react-router-dom";
import UpArrow from "./images/upArrow.svg";
import travel from "./images/travel.png";
import foodTravelLogo from "./images/foodTravelLogo.png";

const MainFieldHeadder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  color: white;
  position: fixed;
  z-index: 5;

  @media screen and (max-width: 600px) {
    height: 60px;
    background-color: white;
  }
`;

const CoverHeadderText = styled.div`
  height: 100%;
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  margin-right: 10%;
  color: black;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MenuBox = styled.div`
  display: flex;
  width: 0;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
  z-index: 5;

  ${(props) => props.$move && `width:100%`}
`;

const CoverHeadderTitle = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  font-family: "PingFangTC";
  text-decoration: none;
  letter-spacing: 12px;

  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

const ImgSize = styled.img`
  width: 7px;
  height: 7px;
  box-sizing: border-box;
  margin-left: 7px;
`;

const MenuSize = styled.img`
  display: none;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const MenuLeft = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
`;

const MenuLeftTopHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
`;

const MenuLeftMainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px 30px;
`;

const MenuLeftSubTitle = styled(Link)`
  width: 80%;
  height: 50px;
  text-decoration: none;
  font-size: 20px;
  color: black;
  font-weight: 600;
`;

const MenuBackground = styled.div`
  width: 20%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
`;

const DownImg = () => {
  return <ImgSize src={down} />;
};

const MainFieldHeadderTitle = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  margin-left: 10%;
  font-family: "PingFangTC";

  @media screen and (max-width: 600px) {
    width: 250px;
    margin-right: 10%;
    margin-left: 5%;
  }
`;

const TopBottom = styled.img`
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const TopBlock = styled.div`
  width: 100%;
  height: 70px;

  @media screen and (max-width: 600px) {
    display: none;
    height: 80px;
  }
`;

export default function Header() {
  const [topBottomArise, setTopBottomArise] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function HandleMenu() {
    if (menuOn) {
      setMenuOn(false);
    } else {
      setMenuOn(true);
    }
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setTopBottomArise(true);
    } else {
      setTopBottomArise(false);
    }
  }

  return (
    <>
      <MenuBox $move={menuOn}>
        <MenuLeft>
          <MenuLeftTopHeader />
          <MenuLeftMainBox>
            <MenuLeftSubTitle to="/travel" onClick={HandleMenu}>
              旅遊
            </MenuLeftSubTitle>
            <MenuLeftSubTitle to="/food" onClick={HandleMenu}>
              美食
            </MenuLeftSubTitle>
          </MenuLeftMainBox>
        </MenuLeft>
        <MenuBackground onClick={HandleMenu} />
      </MenuBox>
      <MainFieldHeadder>
        <MainFieldHeadderTitle to="/">
          <img
            style={{ width: "140px", marginRight: "5px" }}
            alt="嚐飽途"
            src={foodTravelLogo}
          />
          最懂你的生活網
        </MainFieldHeadderTitle>
        <CoverHeadderText>
          <CoverHeadderTitle to="/travel">
            旅遊
            <DownImg />
          </CoverHeadderTitle>
          <CoverHeadderTitle to="/food">
            美食
            <DownImg />
          </CoverHeadderTitle>
          {/* <CoverHeadderTitle to="/">
            <SearchImg src={search} />
          </CoverHeadderTitle> */}
        </CoverHeadderText>
        <MenuSize src={menu} onClick={HandleMenu} />
      </MainFieldHeadder>
      <TopBlock />
      {topBottomArise && <TopBottom onClick={topFunction} src={UpArrow} />}
    </>
  );
}
