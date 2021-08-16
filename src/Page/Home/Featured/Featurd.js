import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PostMainProjectBox, ReadMore, MainPostTittle } from "../Posts/Post";
import FeaturdTitleImg1 from "./images/pexels-valeria-boltneva-842571.png";
import FeaturdTitleImg2 from "./images/pexels-valeria-boltneva-874254.png";
import FoodImg1 from "../Posts/images/pexels-photo-1579926.png";
import FoodImg2 from "../Posts/images/pexels-photo-704971.png";
import FoodImg3 from "../Posts/images/pexels-photo-416471.png";
import FoodImg4 from "../Posts/images/pexels-photo-286283.png";
import { ArticleNumber } from "../../../API";

const FeaturedBigTitle = styled.div`
  width: 318px;
  max-height: 113px;
  margin: 243px auto 253px auto;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
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

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const FeaturedBigTitleBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: "Noto Sans TC", sans-serif;
  letter-spacing: 18px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    letter-spacing: 10px;
  }
`;

const MainBox = styled.div`
  display: flex;
  max-width: 1330px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
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
`;

const FeaturdImgLabelLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
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
`;
const FeaturdBorder = styled.div`
  max-width: 50px;
  height: 2px;
  background-color: #979797;
  margin: 106px auto 117px auto;
  box-sizing: border-box;
`;

const FeaturdBlock = styled.div`
  width: 100%;
  height: 146px;
`;
const FeaturBottomBlock = styled.div`
  width: 100%;
  height: 400px;
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
  const [post, setPost] = useState([]);

  useEffect(() => {
    ArticleNumber(4).then((data) => setPost(data));
  }, []);

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
        tittleHeadder1="熱"
        tittleHeadder2="食"
        subtitleHeadder="HOT"
      />
      <MainBox>
        {post.map((data) => {
          return (
            <PostMainProjectBox
              key={data.ID_ettoday}
              toLink={data.ID_ettoday}
              tittle={data.Title_ettoday}
              subtitle1={data.Class}
              date={data.Day}
              imgSrc={data.Picurl_ettoday}
            />
          );
        })}
      </MainBox>
      <ReadMore />
      <FeaturBottomBlock />
    </>
  );
}
