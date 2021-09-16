import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  PostMainProjectBox,
  MainBox,
  ReadMore,
  MainPostTittle,
} from "../Posts/Post";
import FeaturdTitleImg1 from "./images/pexels-valeria-boltneva-842571.png";
import FeaturdTitleImg2 from "./images/pexels-valeria-boltneva-874254.png";
import { TodayRestaurantApi } from "../../../API";

const FeaturedBigTitle = styled.div`
  width: 318px;
  max-height: 113px;
  margin: 243px auto 253px auto;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    height: auto;
    margin: 50px auto 50px auto;
  }
`;

const FeaturedBigTitleTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 10px;
  font-family: "Open Sans", sans-serif;

  @media screen and (max-width: 500px) {
    font-size: 25px;
    letter-spacing: 5px;
  }
`;

const FeaturedBigTitleBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: "Noto Sans TC", sans-serif;
  letter-spacing: 18px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    letter-spacing: 10px;
  }
`;

const BigTitle = ({ topTitle, bottomTitle }) => {
  return (
    <FeaturedBigTitle>
      <FeaturedBigTitleTop>{topTitle}</FeaturedBigTitleTop>
      <FeaturedBigTitleBottom>{bottomTitle}</FeaturedBigTitleBottom>
    </FeaturedBigTitle>
  );
};

const FeaturdImgBox = styled.div`
  width: 88%;
  margin-left: 6%;
  margin-right: 6%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const FeaturdImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const FeaturdImgLabel = styled.div`
  max-width: 1330px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 16px auto 0 auto;
  font-size: 14px;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    margin: 16px 3% 0 3%;
    font-size: 12px;
  }

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    justify-content: space-between;
    margin: 16px 6% 0 6%;
  }
`;

const FeaturdImgLabelLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: 700;
`;

const FeaturdImgLabelRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: #a4a4a4;
`;

const FeaturdImgBigTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  font-size: 42px;
  font-family: "Noto Sans TC", sans-serif;
  margin-top: 25px;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }

  @media screen and (min-width: 600px) {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;
const FeaturdBorder = styled.div`
  max-width: 1050px;
  height: 2px;
  background-color: #979797;
  margin: 106px auto 117px auto;
  box-sizing: border-box;

  @media screen and (max-width: 1050px) {
    background-color: white;
    margin: 20px 0;
  }
`;

const FeaturdBlock = styled.div`
  width: 100%;
  height: 146px;

  @media screen and (max-width: 1050px) {
    height: 80px;
  }
`;
const FeaturBottomBlock = styled.div`
  width: 100%;
  height: 400px;

  @media screen and (max-width: 1050px) {
    height: 200px;
  }
`;

const FeaturdBox = ({
  srcImg,
  heaturdText1,
  heaturdText2,
  heaturdText3,
  date,
  heaturdTitle,
}) => {
  return (
    <>
      <FeaturdImgBox>
        <FeaturdImg src={srcImg} />
      </FeaturdImgBox>
      <FeaturdImgLabel>
        <FeaturdImgLabelLeft>
          <div>{heaturdText1}</div>
          <div style={{ paddingLeft: "7px" }}>{heaturdText2}</div>
          <div style={{ paddingLeft: "7px" }}>{heaturdText3}</div>
        </FeaturdImgLabelLeft>
        <FeaturdImgLabelRight>{date}</FeaturdImgLabelRight>
      </FeaturdImgLabel>
      <FeaturdImgBigTitle>{heaturdTitle}</FeaturdImgBigTitle>
    </>
  );
};

export default function Featurd() {
  const [restaurantPost, setRestaurantPost] = useState([]);
  const [restaurantPostItems, setRestaurantPostItems] = useState([]);

  useEffect(() => {
    fetch(TodayRestaurantApi)
      .then((response) => response.json())
      .then((data) => {
        setRestaurantPostItems(data.data);
      });
  }, []);

  useEffect(() => {
    let restaurantTest = restaurantPostItems.slice(0, 4);
    setRestaurantPost(restaurantTest);
  }, [restaurantPostItems]);

  return (
    <>
      <BigTitle topTitle="SELECTED" bottomTitle="本期精選" />
      <FeaturdBox
        srcImg={FeaturdTitleImg1}
        heaturdTitle="仙女的早餐新提案！五分鐘快速上桌❤️💛🧡"
        heaturdText1="#甜點"
        heaturdText2="#下午茶"
        date="2021/07/07"
      />
      <FeaturdBorder />
      <FeaturdBox
        srcImg={FeaturdTitleImg2}
        heaturdTitle="疫情要吃什麼？折扣外帶懶人包！"
        heaturdText1="#甜點"
        heaturdText2="#下午茶"
        date="2021/07/07"
      />
      <FeaturdBlock />
      <MainPostTittle
        tittleHeadder1="餐"
        tittleHeadder2="廳"
        subtitleHeadder="HOT"
      />
      <MainBox>
        {restaurantPost.map((data) => {
          return (
            <PostMainProjectBox
              key={data.crawler_No}
              toLink={data.crawler_No}
              tittle={`${data.crawler_Title.substr(0, 25)} ...`}
              subtitle1={data.crawler_Type}
              subtitle2={
                data.crawler_Keyword === ""
                  ? ""
                  : `${data.crawler_Keyword.substr(0, 10)} ...`
              }
              date={data.crawler_Date}
              imgSrc={data.crawler_PicUrl}
            />
          );
        })}
      </MainBox>
      <ReadMore />
      <FeaturBottomBlock />
    </>
  );
}
