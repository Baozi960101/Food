import React from "react";
import foodMainImg from "./images/pexels-ready-made-3850838.png";
import styled from "styled-components";

const HeadderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 170px;
`;
const HeadderImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const HeadderBoText = styled.div`
  max-width: 830px;
  position: absolute;
  z-index: 1;
  color: white;
`;

const HeadderBoTextTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 68px;
  font-family: "Open Sans", sans-serif;
`;

const HeadderBoTextSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 25px;
  letter-spacing: 4px;
  margin-top: 15px;
`;
const FoodHeadderMain = ({ ImgSrc, title, subtitle }) => {
  return (
    <>
      <HeadderBox>
        <HeadderBoText>
          <HeadderBoTextTitle>{title}</HeadderBoTextTitle>
          <HeadderBoTextSubtitle>{subtitle}</HeadderBoTextSubtitle>
        </HeadderBoText>
        <HeadderImg src={ImgSrc} />
      </HeadderBox>
    </>
  );
};

export default function Headder() {
  return (
    <>
      <FoodHeadderMain
        ImgSrc={foodMainImg}
        title="DELICIOUS & YAMMY"
        subtitle="美食版 找到屬於你的口味應有盡有"
      />
    </>
  );
}