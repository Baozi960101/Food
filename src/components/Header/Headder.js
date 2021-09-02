import React, { useEffect, useState } from "react";
import styled from "styled-components";
import down from "./images/down.svg";
import search from "./images/search.svg";
import { Link } from "react-router-dom";
import UpArrow from "./images/upArrow.svg";

const MainFieldHeadder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.41);
  position: absolute;
  z-index: 1;

  @media screen and (max-width: 600px) {
    height: 60px;
    background-color: black;
  }
`;

const CoverHeadderText = styled.div`
  height: 100%;
  display: flex;
  width: 550px;
  justify-content: space-between;
  align-items: center;
  margin-right: 10%;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MenuBox = styled.div``;

const CoverHeadderTitle = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: white;
  cursor: pointer;
  font-family: "PingFangTC";
  text-decoration: none;

  & + & {
    letter-spacing: 12px;
  }

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
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const DownImg = () => {
  return <ImgSize src={down} />;
};

const SearchImg = styled.img`
  width: 14px;
  height: 14px;
`;

const MainFieldHeadderTitle = styled(Link)`
  font-family: "PingFangTC";
  font-size: 25px;
  color: white;
  text-decoration: none;
  margin-left: 10%;

  @media screen and (min-width: 600px) {
    font-size: 20px;
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

export default function Headder() {
  const [topBottomArise, setTopBottomArise] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

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

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <MainFieldHeadder>
        <MainFieldHeadderTitle to="/">建通股份有限公司</MainFieldHeadderTitle>
        <CoverHeadderText>
          <CoverHeadderTitle to="/">
            戶外運動
            <DownImg />
          </CoverHeadderTitle>
          <CoverHeadderTitle to="/">
            旅遊
            <DownImg />
          </CoverHeadderTitle>
          <CoverHeadderTitle to="/food">
            美食
            <DownImg />
          </CoverHeadderTitle>
          <CoverHeadderTitle to="/">
            健康
            <DownImg />
          </CoverHeadderTitle>
          {/* <CoverHeadderTitle to="/">
            <SearchImg src={search} />
          </CoverHeadderTitle> */}
        </CoverHeadderText>
        <MenuSize src={down} />
      </MainFieldHeadder>
      {topBottomArise && <TopBottom onClick={topFunction} src={UpArrow} />}
    </>
  );
}
