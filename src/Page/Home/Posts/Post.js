import styled from "styled-components";
import React, { useEffect, useState } from "react";
import RightArrows from "./images/right-arrows-symbol.svg";
import foodGridImg1 from "./images/pexels-photo-315755.png";
import { Link } from "react-router-dom";
import { TodayFoodApi, TodayTravelApi } from "../../../API";

const PostTittleBox = styled.div`
  display: flex;
  width: 88%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;

  @media screen and (max-width: 1050px) {
    margin-bottom: 20px;
  }
`;

const PostTittleBorder = styled.div`
  width: 585px;
  height: 2px;
  background-color: #979797;
`;

const PostTittle = styled.div`
  box-sizing: border-box;
  margin: 0px 28px;
  width: 100px;
  height: 60px;
`;

const PostTopTittle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  font-size: 24px;
  box-sizing: border-box;
  padding: 0px 13px;
  font-family: "Noto Sans TC", sans-serif;

  @media screen and (max-width: 1050px) {
    font-size: 20px;
    padding: 0;
  }
`;

const PostBottomSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 1px;

  @media screen and (max-width: 1050px) {
    font-size: 16px;
  }
`;

const PostTittleText = ({ tittleHeadder1, tittleHeadder2, subtitle }) => {
  return (
    <PostTittle>
      <PostTopTittle>
        <div>{tittleHeadder1}</div>
        <div>{tittleHeadder2}</div>
      </PostTopTittle>
      <PostBottomSubtitle>{subtitle}</PostBottomSubtitle>
    </PostTittle>
  );
};

const PostMainProject = styled.div`
  width: 300px;
  height: 406px;
  box-sizing: border-box;

  & + & {
    margin-left: 1%;
  }

  @media screen and (max-width: 1050px) {
    width: 150px;
    height: auto;
  }
`;

const PostMainProjectImgBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff7ff;
  overflow: hidden;

  @media screen and (max-width: 1050px) {
    max-height: 150px;
  }
`;

const PostMainProjectImg = styled.img`
  height: 100%;
`;

const PostMainProjectText = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 42px;
  font-size: 21px;
  font-family: "Noto Sans TC", sans-serif;
  margin-top: 26px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 1050px) {
    font-size: 13px;
    margin-top: 10px;
  }
`;

const PostMainProjectTextSubtitleMainRWD = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const PostMainProjectTextSubtitle = styled.div`
  width: 100%;
  height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  margin-top: 18px;

  @media screen and (max-width: 1050px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;
const PostMainProjectTextSubtitleMain = ({
  subtitle1,
  subtitle2,
  subtitle3,
  date,
}) => {
  return (
    <PostMainProjectTextSubtitle>
      <div style={{ display: "flex", color: "black" }}>
        <div style={{ fontWeight: "800" }}>
          {subtitle1 ? "# " : ""}
          {subtitle1}
        </div>
        <PostMainProjectTextSubtitleMainRWD>
          <div style={{ paddingLeft: "7px", fontWeight: "800" }}>
            {subtitle2 ? "# " : ""}
            {subtitle2}
          </div>
          <div style={{ paddingLeft: "7px", fontWeight: "800" }}>
            {subtitle3 ? "# " : ""}
            {subtitle3}
          </div>
        </PostMainProjectTextSubtitleMainRWD>
      </div>
      <div>
        <div style={{ color: "#a4a4a4", fontFamily: "Open Sans, sans-serif" }}>
          {date}
        </div>
      </div>
    </PostMainProjectTextSubtitle>
  );
};

export const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1330px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-top: 100px;

  @media screen and (max-width: 1050px) {
    margin-top: 20px;
    justify-content: space-evenly;
  }
`;

const ReadMoreBox = styled.div`
  display: flex;
  max-width: 1330px;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1050px) {
    width: 85%;
  }
`;

const ReadMoreText = styled(Link)`
  display: flex;
  width: 116px;
  height: 22px;
  justify-content: space-between;
  color: #f9ac53;
  box-sizing: border-box;
  margin-top: 21px;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
`;

export const ReadMore = ({ ReadLinkTo }) => {
  return (
    <ReadMoreBox>
      <ReadMoreText to={ReadLinkTo}>
        <div>點我看更多</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={RightArrows}
            alt="更多"
            style={{ width: "18px", height: "10px" }}
          />
        </div>
      </ReadMoreText>
    </ReadMoreBox>
  );
};

export const PostMainProjectBox = ({
  toLink,
  imgSrc,
  tittle,
  subtitle1,
  subtitle2,
  subtitle3,
  date,
}) => {
  return (
    <PostMainProject>
      <PostMainProjectImgBox>
        <PostMainProjectImg alt="美食圖片" src={imgSrc} />
      </PostMainProjectImgBox>
      <PostMainProjectText to={`/food/post/${toLink}`}>
        {tittle}
      </PostMainProjectText>
      <PostMainProjectTextSubtitleMain
        subtitle1={subtitle1}
        subtitle2={subtitle2}
        subtitle3={subtitle3}
        date={date}
      />
    </PostMainProject>
  );
};

export const TravelMainProjectBox = ({
  toLink,
  imgSrc,
  tittle,
  subtitle1,
  subtitle2,
  subtitle3,
  date,
}) => {
  return (
    <PostMainProject>
      <PostMainProjectImgBox>
        <PostMainProjectImg alt="旅遊圖片" src={imgSrc} />
      </PostMainProjectImgBox>
      <PostMainProjectText to={`/travel/post/${toLink}`}>
        {tittle}
      </PostMainProjectText>
      <PostMainProjectTextSubtitleMain
        subtitle1={subtitle1}
        subtitle2={subtitle2}
        subtitle3={subtitle3}
        date={date}
      />
    </PostMainProject>
  );
};

const Block = styled.div`
  width: 100%;
  height: 107px;
`;

export const MainPostTittle = ({
  tittleHeadder1,
  tittleHeadder2,
  subtitleHeadder,
}) => {
  return (
    <PostTittleBox>
      <PostTittleBorder />
      <PostTittleText
        tittleHeadder1={tittleHeadder1}
        tittleHeadder2={tittleHeadder2}
        subtitle={subtitleHeadder}
      />
      <PostTittleBorder />
    </PostTittleBox>
  );
};

async function fetchTodayFood(setFoodPostItems) {
  const res = await fetch(TodayFoodApi);
  const { data } = await res.json();
  setFoodPostItems(data);
}

async function fetchTodayTravel(setSTravelPostItems) {
  const res = await fetch(TodayTravelApi);
  const { data } = await res.json();
  setSTravelPostItems(data);
}

function mainPost(post) {
  return post.map((data) => {
    return (
      <PostMainProjectBox
        key={data.crawler_No}
        toLink={`${data.crawler_No}`}
        tittle={`${data.crawler_Title.substr(0, 25)} ...`}
        subtitle1={data.crawler_Type}
        subtitle2={
          data.crawler_Keyword === ""
            ? ""
            : `${data.crawler_Keyword.substr(0, 10)} ...`
        }
        date={data.crawler_Date}
        imgSrc={
          data.crawler_Web === "facebook" ||
          data.crawler_Web === "dcard" ||
          data.crawler_Web === "ptt"
            ? foodGridImg1
            : data.crawler_PicUrl
        }
      />
    );
  });
}

function mainTravelPost(post) {
  return post.map((data) => {
    return (
      <TravelMainProjectBox
        key={data.crawler_No}
        toLink={`${data.crawler_No}`}
        tittle={`${data.crawler_Title.substr(0, 25)} ...`}
        subtitle1={data.crawler_Type}
        subtitle2={
          data.crawler_Keyword === ""
            ? ""
            : `${data.crawler_Keyword.substr(0, 10)} ...`
        }
        date={data.crawler_Date}
        imgSrc={
          data.crawler_Web === "facebook" ||
          data.crawler_Web === "dcard" ||
          data.crawler_Web === "ptt"
            ? foodGridImg1
            : data.crawler_PicUrl
        }
      />
    );
  });
}

export default function Post() {
  const [foodPost, setFoodPost] = useState([]);
  const [foodPostItems, setFoodPostItems] = useState([]);
  const [travelsPost, setTravelPost] = useState([]);
  const [travelPostItems, setSTravelPostItems] = useState([]);

  useEffect(() => {
    fetchTodayFood(setFoodPostItems);
    fetchTodayTravel(setSTravelPostItems);
  }, []);

  useEffect(() => {
    if (foodPostItems.length === 0 && travelPostItems.length === 0) {
      return;
    }
    setFoodPost(foodPostItems.slice(0, 4));
    setTravelPost(travelPostItems.slice(0, 4));
  }, [foodPostItems, travelPostItems]);

  return (
    <>
      <MainPostTittle
        tittleHeadder1="美"
        tittleHeadder2="食"
        subtitleHeadder="FOOD"
      />
      <MainBox>{mainPost(foodPost)}</MainBox>
      <ReadMore ReadLinkTo="/food" />
      <Block />
      <MainPostTittle
        tittleHeadder1="旅"
        tittleHeadder2="遊"
        subtitleHeadder="TRAVEL"
      />
      <MainBox>{mainTravelPost(travelsPost)}</MainBox>
      <ReadMore ReadLinkTo="/travel" />
      <Block />
      <MainPostTittle
        tittleHeadder1="熱"
        tittleHeadder2="門"
        subtitleHeadder="HOT"
      />
      <MainBox>{mainPost(foodPost)}</MainBox>
      <ReadMore ReadLinkTo="/" />
    </>
  );
}
