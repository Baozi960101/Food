import React from "react";
import styled from "styled-components";
import { Triangle, Square } from "./IrregularGraphics";
import DetailedArticleImg2 from "./images/pexels-photo-1437590.png";
import DetailedArticleImg1 from "./images/07-f-4-e-861-0863-4-c-36-a-636-16-a-30-a-41-dc-8-d.png";

const DetailedArticleBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 88%;
  margin-right: 6%;
  margin-left: 6%;
`;

const DetailedArticleBoxLeft = styled.div`
  width: 62%;
  box-sizing: border-box;
`;

const DetailedArticleBoxRight = styled.div`
  width: 30%;
`;

const DetailedArticleBoxLeftTitle = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 19px;
  font-size: 48px;
  letter-spacing: 6.5px;
  font-weight: 800;
`;
const DetailedArticleBoxLeftImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const DetailedArticleBoxLeftSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 20px;
`;

const DetailedArticleBoxLeftText = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  font-size: 21px;
  letter-spacing: 2.84px;
  font-weight: 700;
  margin: 83px auto 230px auto;
`;

const IrregularGraphicsTextTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 21px;
  letter-spacing: 0.5px;
  font-weight: 600;
  position: absolute;
  z-index: 4;
  padding-top: 15px;
`;

const IrregularGraphicsTextBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 36px;
  letter-spacing: 3px;
  font-weight: 700;
  position: absolute;
  z-index: 4;
  padding-top: 35px;
`;

const IrregularGraphicsTitle = ({ title, subtitle }) => {
  return (
    <>
      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          marginBottom: "70px",
        }}
      >
        <Triangle />
        <div style={{ width: "100%", position: "relative" }}>
          <IrregularGraphicsTextTop>{title}</IrregularGraphicsTextTop>
          <IrregularGraphicsTextBottom>{subtitle}</IrregularGraphicsTextBottom>
        </div>
        <Square />
      </div>
    </>
  );
};

const DetailedArticleBoxRightText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;
const DetailedArticleBoxRightImg = styled.img`
  width: 170px;
  height: 170px;
`;

const DetailedArticleBoxRightTextTitle = styled.div`
  font-size: 21px;
  letter-spacing: 2px;
  font-weight: 600;
  padding-left: 15px;
`;

const DetailedArticleBoxRightTextTag = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
`;

const DetailedArticleBoxRightTextMain = ({
  srcImg,
  text,
  tag1,
  tag2,
  tag3,
}) => {
  return (
    <>
      <DetailedArticleBoxRightText>
        <DetailedArticleBoxRightImg src={srcImg} />
        <DetailedArticleBoxRightTextTitle>
          {text}
          <DetailedArticleBoxRightTextTag>
            <div>{tag1}</div>
            <div style={{ paddingLeft: "7px" }}>{tag2}</div>
            <div style={{ paddingLeft: "7px" }}>{tag3}</div>
          </DetailedArticleBoxRightTextTag>
        </DetailedArticleBoxRightTextTitle>
      </DetailedArticleBoxRightText>
    </>
  );
};

const DetailedArticleBoxLeftMain = ({
  title,
  srcImg,
  tag1,
  tag2,
  tag3,
  time,
  text,
}) => {
  return (
    <>
      <DetailedArticleBoxLeftTitle>{title}</DetailedArticleBoxLeftTitle>
      <DetailedArticleBoxLeftImg src={srcImg} />
      <DetailedArticleBoxLeftSubtitle>
        <div style={{ display: "flex" }}>
          <div>{tag1}</div>
          <div style={{ paddingLeft: "7px", fontWeight: "600" }}>{tag2}</div>
          <div style={{ paddingLeft: "7px", fontWeight: "600" }}>{tag3}</div>
        </div>
        <div style={{ color: "#a4a4a4" }}>{time}</div>
      </DetailedArticleBoxLeftSubtitle>
      <DetailedArticleBoxLeftText>{text}</DetailedArticleBoxLeftText>
    </>
  );
};

export default function DetailedArticle() {
  return (
    <>
      <DetailedArticleBox>
        <DetailedArticleBoxLeft>
          <DetailedArticleBoxLeftMain
            title="肉桂捲控看過來！盤點新竹肉桂捲！浮日烘培肉桂捲"
            srcImg={DetailedArticleImg1}
            tag1="# 甜點"
            tag2="# 下午茶"
            time="2021/07/15"
            text="比較像布丁綿密一點
          不管大顆小顆酥脆程度都很剛好
          不會有些可麗露脆有些像軟木塞
          我覺得可麗露一大重點真的是品質均一！
          連爸爸都覺得好吃
          四種口味！原味香草、法芙娜巧克力、泰式奶茶、鹹蛋黃（加10元）
          🔺大顆可麗露才可以有鹹蛋黃口味！
          通常不同口味的可麗露外面都會再➕價
          但浮日不同口味價格一樣真的很佛
          不過 各個口味淡了一點 
          "
          />
        </DetailedArticleBoxLeft>
        <DetailedArticleBoxRight>
          <IrregularGraphicsTitle title="HOT & YAMMY" subtitle="美食熱門榜" />
          <DetailedArticleBoxRightTextMain
            text="超正宗泰式料理, 酸辣香什麼都有,你吃過了嗎？"
            srcImg={DetailedArticleImg2}
            tag1="# 甜點"
            tag2="# 下午茶"
          />
          <DetailedArticleBoxRightTextMain
            text="超正宗泰式料理, 酸辣香什麼都有,你吃過了嗎？"
            srcImg={DetailedArticleImg2}
            tag1="# 甜點"
            tag2="# 下午茶"
          />
          <DetailedArticleBoxRightTextMain
            text="超正宗泰式料理, 酸辣香什麼都有,你吃過了嗎？"
            srcImg={DetailedArticleImg2}
            tag1="# 甜點"
            tag2="# 下午茶"
          />
          <div style={{ width: "100%", height: "50px" }}></div>
        </DetailedArticleBoxRight>
      </DetailedArticleBox>
    </>
  );
}
