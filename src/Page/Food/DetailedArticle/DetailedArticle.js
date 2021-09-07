import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Triangle, Square } from "./IrregularGraphics";
import { ArticleNumber, ArticleId, FoodApi } from "../../../API";
import { SlugContext } from "../../../context";
import { Link } from "react-router-dom";

const DetailedArticleBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 88%;
  margin-right: 6%;
  margin-left: 6%;
  position: relative;
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
  height: auto;
  margin-bottom: 19px;
  font-size: 48px;
  letter-spacing: 6.5px;
  font-weight: 800;
`;

const DetailedArticleBoxLeftImgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff7ff;
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
  margin: 83px auto 30px auto;
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

const DetailedArticleBoxLeftReadMore = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 200px;
  color: blue;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
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

const DetailedArticleBoxRightImgBox = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  background-color: #fff7ff;
`;

const DetailedArticleBoxRightImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const DetailedArticleBoxRightTextTitle = styled(Link)`
  font-size: 21px;
  letter-spacing: 2px;
  font-weight: 600;
  padding-left: 15px;
  padding-top: 10px;
  text-decoration: none;
  color: black;
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
  toLink,
}) => {
  return (
    <>
      <DetailedArticleBoxRightText>
        <DetailedArticleBoxRightImgBox>
          <DetailedArticleBoxRightImg src={srcImg} />
        </DetailedArticleBoxRightImgBox>
        <DetailedArticleBoxRightTextTitle to={`/food/post/${toLink}`}>
          {text}
          <DetailedArticleBoxRightTextTag>
            <div>
              {tag1 ? "#" : ""}
              {tag1}
            </div>
            <div style={{ paddingLeft: "7px" }}>
              {tag2 ? "#" : ""}
              {tag2}
            </div>
            <div style={{ paddingLeft: "7px" }}>
              {tag3 ? "#" : ""}
              {tag3}
            </div>
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
  toLink,
}) => {
  return (
    <>
      <DetailedArticleBoxLeftTitle>{title}</DetailedArticleBoxLeftTitle>
      <DetailedArticleBoxLeftImgBox>
        <DetailedArticleBoxLeftImg src={srcImg} />
      </DetailedArticleBoxLeftImgBox>
      <DetailedArticleBoxLeftSubtitle>
        <div style={{ display: "flex" }}>
          <div>
            {tag1 ? "# " : ""}
            {tag1}
          </div>
          <div style={{ paddingLeft: "7px", fontWeight: "600" }}>
            {tag2 ? "# " : ""}
            {tag2}
          </div>
          <div style={{ paddingLeft: "7px", fontWeight: "600" }}>
            {tag3 ? "# " : ""}
            {tag3}
          </div>
        </div>
        <div style={{ color: "#a4a4a4" }}>{time}</div>
      </DetailedArticleBoxLeftSubtitle>
      <DetailedArticleBoxLeftText>{text}</DetailedArticleBoxLeftText>
      <DetailedArticleBoxLeftReadMore target="_blank" href={toLink}>
        點我閱讀更多...
      </DetailedArticleBoxLeftReadMore>
    </>
  );
};

const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1250px;
  overflow: hidden;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 2px;
  position: absolute;
  background-color: white;
  z-index: 5;
`;

export default function DetailedArticle() {
  const { fooDSlug } = useContext(SlugContext);
  const [detailedArticlePost, setDetailedArticlePost] = useState([]);
  const [detailedArticleOnlyPost, setDetailedArticleOnlyPost] = useState([]);
  const [foodPostItems, setFoodPostItems] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    ArticleId(fooDSlug).then((data) => {
      setDetailedArticleOnlyPost(data);
    });
    fetch(FoodApi)
      .then((response) => response.json())
      .then((data) => {
        setDetailedArticlePost(data.data);
      });
  }, []);

  useEffect(() => {
    let foodTest = detailedArticlePost.slice(0, 3);
    setFoodPostItems(foodTest);
    setLoad(false);
  }, [detailedArticlePost]);

  return (
    <>
      {load && <Loading>載入中 ...</Loading>}
      <DetailedArticleBox>
        <DetailedArticleBoxLeft>
          {detailedArticleOnlyPost.map((data) => {
            return (
              <DetailedArticleBoxLeftMain
                key={data.crawler_No}
                title={data.crawler_Title}
                text={`${data.crawler_Content.substr(0, 100)} ...`}
                srcImg={data.crawler_PicUrl}
                tag1={data.crawler_Type}
                tag2={
                  data.crawler_Keyword === "" ? "" : `${data.crawler_Keyword} `
                }
                time={data.crawler_Date}
                toLink={data.crawler_Url}
              />
            );
          })}
        </DetailedArticleBoxLeft>
        <DetailedArticleBoxRight>
          <IrregularGraphicsTitle title="HOT & YAMMY" subtitle="美食熱門榜" />
          {foodPostItems.map((data) => {
            return (
              <DetailedArticleBoxRightTextMain
                key={data.crawler_No}
                text={`${data.crawler_Title.substr(0, 30)} ...`}
                srcImg={data.crawler_PicUrl}
                tag1={data.crawler_Type}
                tag2={
                  data.crawler_Keyword === ""
                    ? ""
                    : `${data.crawler_Keyword.substr(0, 15)} ...`
                }
                toLink={data.crawler_No}
              />
            );
          })}
          <div style={{ width: "100%", height: "50px" }}></div>
        </DetailedArticleBoxRight>
      </DetailedArticleBox>
    </>
  );
}
