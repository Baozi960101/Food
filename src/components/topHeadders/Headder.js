import React from "react";
import styled from "styled-components";
import down from "./images/down.svg";
import search from "./images/search.svg";
import { Link } from "react-router-dom";

const MainFieldHeadder = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.41);
  position: absolute;
  z-index: 1;
`;

const CoverHeadderText = styled.div`
  height: 100%;
  display: flex;
  width: 550px;
  justify-content: space-between;
  align-items: center;
  margin-right: 10%;
`;

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
`;

const ImgSize = styled.img`
  width: 7px;
  height: 7px;
  box-sizing: border-box;
  margin-left: 7px;
`;

const DownImg = () => {
  return <ImgSize src={down} />;
};

const SearchImg = styled.img`
  width: 14px;
  height: 14px;
`;

export default function Headder() {
  return (
    <>
      <MainFieldHeadder>
        <CoverHeadderText>
          <CoverHeadderTitle>
            戶外運動
            <DownImg />
          </CoverHeadderTitle>
          <CoverHeadderTitle>
            旅遊
            <DownImg />
          </CoverHeadderTitle>
          <CoverHeadderTitle to="./food">
            美食
            <DownImg />
          </CoverHeadderTitle>
          <CoverHeadderTitle>
            健康
            <DownImg />
          </CoverHeadderTitle>
          <CoverHeadderTitle>
            <SearchImg src={search} />
          </CoverHeadderTitle>
        </CoverHeadderText>
      </MainFieldHeadder>
    </>
  );
}
