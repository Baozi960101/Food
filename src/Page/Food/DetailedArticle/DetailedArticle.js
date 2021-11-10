import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Square } from "./IrregularGraphics";
import { AloneFoodApi, TodayFoodApi } from "../../../API";
import { SlugContext } from "../../../context";
import { Link } from "react-router-dom";
import { judgmentSourseShowImage } from "../../Home/Posts/Post";

const DetailedArticleBox = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  padding-right: 6%;
  padding-left: 6%;
  box-sizing: border-box;

  @media screen and (max-width: 599px) {
    flex-wrap: wrap;
  }

  @media screen and (min-width: 600px) and (max-width: 1050px) {
    justify-content: space-between;
  }
`;

const DetailedArticleBoxLeft = styled.div`
  width: 60%;
  box-sizing: border-box;

  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

const DetailedArticleBoxRight = styled.div`
  width: 30%;
  box-sizing: border-box;

  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

const DetailedArticleBoxLeftTitle = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 19px;
  font-size: 48px;
  letter-spacing: 6.5px;
  font-weight: 800;

  @media screen and (max-width: 599px) {
    font-size: 28px;
  }
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
  width: 100%;
  font-size: 21px;
  letter-spacing: 1.84px;
  font-weight: 700;
  margin: 50px 0 50px 0;
  box-sizing: border-box;
  word-wrap: break-word;
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

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 14px;
  }
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

  @media screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 28px;
  }
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

  @media screen and (max-width: 599px) {
    margin-bottom: 100px;
  }
`;

const IrregularGraphicsTitleBox = styled.div`
  padding: 0 10%;
  margin-bottom: 70px;
`;

const IrregularGraphicsTitle = ({ title, subtitle }) => {
  return (
    <>
      <IrregularGraphicsTitleBox>
        <div style={{ width: "100%", position: "relative" }}>
          <IrregularGraphicsTextTop>{title}</IrregularGraphicsTextTop>
          <IrregularGraphicsTextBottom>{subtitle}</IrregularGraphicsTextBottom>
        </div>
        <Square />
      </IrregularGraphicsTitleBox>
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
  width: 40%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff7ff;
  overflow: hidden;
`;

const DetailedArticleBoxRightImg = styled.img`
  height: 100%;
`;

const DetailedArticleBoxRightTextTitle = styled(Link)`
  width: 60%;
  font-size: 21px;
  letter-spacing: 2px;
  font-weight: 600;
  padding-left: 15px;
  padding-top: 10px;
  text-decoration: none;
  color: black;
  box-sizing: border-box;
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
          <DetailedArticleBoxRightImg alt="美食圖片" src={srcImg} />
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
        <DetailedArticleBoxLeftImg alt="美食圖片" src={srcImg} />
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

async function fetchAloneFood(fooDSlug, setDetailedArticleOnlyPost) {
  const res = await fetch(AloneFoodApi(fooDSlug));
  const { data } = await res.json();
  setDetailedArticleOnlyPost([data]);
}

async function fetchTodayFood(setDetailedArticlePost) {
  const res = await fetch(TodayFoodApi);
  const { data } = await res.json();
  setDetailedArticlePost(data);
}

function leftPost(detailedArticleOnlyPost) {
  return detailedArticleOnlyPost.map((data) => {
    return (
      <DetailedArticleBoxLeftMain
        key={data.crawler_No}
        title={data.crawler_Title}
        text={`${data.crawler_Content.substr(0, 200)} ...`}
        srcImg={judgmentSourseShowImage(
          data.crawler_No,
          data.crawler_Web,
          data.crawler_PicUrl
        )}
        tag1={data.crawler_Type}
        tag2={data.crawler_Keyword === "" ? "" : `${data.crawler_Keyword} `}
        time={data.crawler_Date}
        toLink={data.crawler_Url}
      />
    );
  });
}

function rightPost(foodPostItems) {
  return foodPostItems.map((data) => {
    return (
      <DetailedArticleBoxRightTextMain
        key={data.crawler_No}
        text={`${data.crawler_Title.substr(0, 30)} ...`}
        srcImg={judgmentSourseShowImage(
          data.crawler_No,
          data.crawler_Web,
          data.crawler_PicUrl
        )}
        tag1={data.crawler_Type}
        tag2={
          data.crawler_Keyword === ""
            ? ""
            : `${data.crawler_Keyword.substr(0, 15)} ...`
        }
        toLink={data.crawler_No}
      />
    );
  });
}

export default function DetailedArticle() {
  const { fooDSlug } = useContext(SlugContext);
  const [detailedArticlePost, setDetailedArticlePost] = useState([]);
  const [detailedArticleOnlyPost, setDetailedArticleOnlyPost] = useState([]);
  const [foodPostItems, setFoodPostItems] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    if (fooDSlug !== "") {
      fetchAloneFood(fooDSlug, setDetailedArticleOnlyPost);
    }
    fetchTodayFood(setDetailedArticlePost);
    return () => {};
  }, [fooDSlug]);

  useEffect(() => {
    if (detailedArticlePost.length === 0) {
      return;
    }
    setFoodPostItems(detailedArticlePost.slice(0, 3));
    setLoad(false);
  }, [detailedArticlePost]);

  return (
    <>
      {load && <Loading>載入中 ...</Loading>}
      <DetailedArticleBox>
        <DetailedArticleBoxLeft>
          {leftPost(detailedArticleOnlyPost)}
        </DetailedArticleBoxLeft>
        <DetailedArticleBoxRight>
          <IrregularGraphicsTitle title="HOT & YAMMY" subtitle="美食熱門榜" />
          {rightPost(foodPostItems)}
          <div style={{ width: "100%", height: "50px" }}></div>
        </DetailedArticleBoxRight>
      </DetailedArticleBox>
    </>
  );
}
