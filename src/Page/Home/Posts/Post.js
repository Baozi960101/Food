import styled from "styled-components";
import React, { useEffect, useState } from "react";
import FoodImg1 from "./images/pexels-photo-1579926.png";
import FoodImg2 from "./images/pexels-photo-704971.png";
import FoodImg3 from "./images/pexels-photo-416471.png";
import FoodImg4 from "./images/pexels-photo-286283.png";
import RightArrows from "./images/right-arrows-symbol.svg";
import { Link } from "react-router-dom";
import { ArticleNumber } from "../../../API";

const PostTittleBox = styled.div`
  display: flex;
  width: 88%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
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
`;

const PostMainProjectImgBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  background-color: #fff7ff;
`;

const PostMainProjectImg = styled.img`
  max-width: 100%;
  height: auto;
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
        <div style={{ paddingLeft: "7px", fontWeight: "800" }}>
          {subtitle2 ? "# " : ""}
          {subtitle2}
        </div>
        <div style={{ paddingLeft: "7px", fontWeight: "800" }}>
          {subtitle3 ? "# " : ""}
          {subtitle3}
        </div>
      </div>
      <div>
        <div style={{ color: "#a4a4a4", fontFamily: "Open Sans, sans-serif" }}>
          {date}
        </div>
      </div>
    </PostMainProjectTextSubtitle>
  );
};

const MainBox = styled.div`
  display: flex;
  max-width: 1330px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-top: 100px;
`;

const ReadMoreBox = styled.div`
  display: flex;
  max-width: 1330px;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
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
        <PostMainProjectImg src={imgSrc} />
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

export default function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    ArticleNumber(4).then((data) => setPost(data));
  }, []);

  return (
    <>
      <MainPostTittle
        tittleHeadder1="美"
        tittleHeadder2="食"
        subtitleHeadder="FOOD"
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
      <ReadMore ReadLinkTo="/food" />
      {/* <MainBox>
        {post.map((data) => {
          return (
            <PostMainProjectBox
              key={data.ID_ettoday}
              tittle={data.Title_ettoday}
              subtitle1={data.Class}
              date={data.Day}
              imgSrc={FoodImg1}
            />
          );
        })}
      </MainBox>
      <ReadMore /> */}
      <Block />
      <MainPostTittle
        tittleHeadder1="熱"
        tittleHeadder2="門"
        subtitleHeadder="HOT"
      />
      <MainBox>
        <PostMainProjectBox
          imgSrc={FoodImg1}
          tittle={"必吃！甜點清單看見快收藏起來, 幸福感MAX"}
          subtitle1={"# 下午茶"}
          subtitle2={"# 美食"}
          date={"2021/07/12"}
        />
        <PostMainProjectBox
          imgSrc={FoodImg2}
          tittle={"減肥又好吃的優格清單！5種吃法讓你美味又想瘦"}
          subtitle1={"# 下午茶"}
          subtitle2={"# 美食"}
          date={"2021/07/12"}
        />
        <PostMainProjectBox
          imgSrc={FoodImg3}
          tittle={"低脂又健康培根捲, 懶人簡單做法, 3招輕鬆搞定"}
          subtitle1={"# 下午茶"}
          subtitle2={"# 美食"}
          date={"2021/07/12"}
        />
        <PostMainProjectBox
          imgSrc={FoodImg4}
          tittle={"幸福滿點！4間高雄美食日式蓋飯, 吃過的人都回不去"}
          subtitle1={"# 下午茶"}
          subtitle2={"# 美食"}
          date={"2021/07/12"}
        />
      </MainBox>
      <ReadMore />
      <Block />
      <MainPostTittle
        tittleHeadder1="熱"
        tittleHeadder2="門"
        subtitleHeadder="HOT"
      />
      <MainBox>
        <PostMainProjectBox
          imgSrc={FoodImg1}
          tittle={"必吃！甜點清單看見快收藏起來, 幸福感MAX"}
          subtitle1={"# 下午茶"}
          subtitle2={"# 美食"}
          date={"2021/07/12"}
        />
        <PostMainProjectBox
          imgSrc={FoodImg2}
          tittle={"減肥又好吃的優格清單！5種吃法讓你美味又想瘦"}
          subtitle1={"# 下午茶"}
          subtitle2={"# 美食"}
          date={"2021/07/12"}
        />
        <PostMainProjectBox
          imgSrc={FoodImg3}
          tittle={"低脂又健康培根捲, 懶人簡單做法, 3招輕鬆搞定"}
          subtitle1={"# 下午茶"}
          subtitle2={"# 美食"}
          date={"2021/07/12"}
        />
        <PostMainProjectBox
          imgSrc={FoodImg4}
          tittle={"幸福滿點！4間高雄美食日式蓋飯, 吃過的人都回不去"}
          subtitle1={"# 下午茶"}
          subtitle2={"# 美食"}
          date={"2021/07/12"}
        />
      </MainBox>
      <ReadMore />
    </>
  );
}
