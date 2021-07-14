import React from "react";
import styled from "styled-components";
import foodGridImg1 from "./images/pexels-photo-315755.png";
import foodGridImg2 from "./images/pexels-photo-3737620.png";
import foodParallelImg1 from "./images/pexels-photo-1437590.png";
import foodParallelImg2 from "./images/pexels-photo-704971.png";
import foodParallelImg3 from "./images/pexels-photo-675951.png";

const FoodGridPostBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1230px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  margin-bottom: 170px;
`;

const FoodGridPostLeft = styled.div`
  width: 775px;
`;

const FoodGridPostRight = styled.div`
  width: 420px;
  padding-top: 30px;
  box-sizing: border-box;
`;

const FoodGridPostLeftTag = styled.div`
  width: 100%;
  height: 20px;
  color: black;
  font-weight: 600;
  display: flex;
  margin-bottom: 10px;
`;
const FoodGridPostLeftImg = styled.img`
  max-width: 100%;
  height: 465px;
  box-sizing: border-box;
`;
const FoodGridPostLeftTitle = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: "Noto Sans TC", sans-serif;
  letter-spacing: 4px;
  box-sizing: border-box;
`;
const FoodGridPostRightImg = styled.img`
  max-width: 100%;
  height: 170px;
  box-sizing: border-box;
`;
const FoodGridPostRightText = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  box-sizing: border-box;
`;

const FoodGridPostRightBox = ({
  imgSrcTop,
  TextTop,
  imgSrcBottom,
  TextBottom,
}) => {
  return (
    <>
      <FoodGridPostRight>
        <FoodGridPostRightImg src={imgSrcTop} />
        <FoodGridPostRightText>{TextTop}</FoodGridPostRightText>
        <FoodGridPostRightImg src={imgSrcBottom} />
        <FoodGridPostRightText>{TextBottom}</FoodGridPostRightText>
      </FoodGridPostRight>
    </>
  );
};

const FoodParallelBox = styled.div`
  max-width: 1260px;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: space-between;
`;

const FoodParallelPost = styled.div`
  width: 370px;
  height: 469px;
`;

const FoodParallelPostImg = styled.img`
  width: 100%;
  height: 330px;
`;
const FoodParallelPostText = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 19px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 21px;
  letter-spacing: 2.8px;
  box-sizing: border-box;
`;

const FoodParallelPostTag = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const FoodParallelPostBox = ({ imgSrc, title, tag1, tag2, tag3 }) => {
  return (
    <>
      <FoodParallelPost>
        <FoodParallelPostImg src={imgSrc} />
        <FoodParallelPostText>{title}</FoodParallelPostText>
        <FoodParallelPostTag>
          <div>{tag1}</div>
          <div style={{ paddingLeft: "7px" }}>{tag2}</div>
          <div style={{ paddingLeft: "7px" }}>{tag3}</div>
        </FoodParallelPostTag>
      </FoodParallelPost>
    </>
  );
};

const FoodGridPostLeftBox = ({ tag1, tag2, tag3, imgSrc, title }) => {
  return (
    <>
      <FoodGridPostLeft>
        <FoodGridPostLeftTag>
          <div>{tag1}</div>
          <div style={{ paddingLeft: "7px" }}>{tag2}</div>
          <div style={{ paddingLeft: "7px" }}>{tag3}</div>
        </FoodGridPostLeftTag>
        <FoodGridPostLeftImg src={imgSrc} />
        <FoodGridPostLeftTitle>{title}</FoodGridPostLeftTitle>
      </FoodGridPostLeft>
    </>
  );
};

const FoodBlock = ({ number }) => {
  return <div style={{ width: "100%", height: `${number}` }}></div>;
};

export default function FoodPost() {
  return (
    <>
      <FoodGridPostBox>
        <FoodGridPostLeftBox
          tag1="# 下午茶"
          tag2="# 甜點"
          imgSrc={foodGridImg1}
          title="食指大動！私房窯烤PIZZA超正宗, 必吃3家店"
        />
        <FoodGridPostRightBox
          imgSrcTop={foodGridImg2}
          imgSrcBottom={foodGridImg2}
          TextTop="國內旅遊！熱門台灣世界級景點有哪些？網狂推1仙境：絕對夠格"
          TextBottom="減碳新生活, 生活中實用小妙招, 原來家裡都有的「這個」可以輕鬆實現！"
        />
      </FoodGridPostBox>
      <FoodParallelBox>
        <FoodParallelPostBox
          imgSrc={foodParallelImg1}
          title="超正宗泰式料理, 酸辣香什麼都有,你吃過了嗎？"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
        <FoodParallelPostBox
          imgSrc={foodParallelImg2}
          title="午餐新選擇, 超值牛排商業套餐,竟然百元有找"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
        <FoodParallelPostBox
          imgSrc={foodParallelImg3}
          title="減肥又好吃的優格清單！5種吃法讓你美味又想瘦"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
      </FoodParallelBox>
      <FoodBlock number="73px" />
      <FoodParallelBox>
        <FoodParallelPostBox
          imgSrc={foodParallelImg1}
          title="超正宗泰式料理, 酸辣香什麼都有,你吃過了嗎？"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
        <FoodParallelPostBox
          imgSrc={foodParallelImg2}
          title="午餐新選擇, 超值牛排商業套餐,竟然百元有找"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
        <FoodParallelPostBox
          imgSrc={foodParallelImg3}
          title="減肥又好吃的優格清單！5種吃法讓你美味又想瘦"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
      </FoodParallelBox>
      <FoodBlock number="73px" />
      <FoodParallelBox>
        <FoodParallelPostBox
          imgSrc={foodParallelImg1}
          title="超正宗泰式料理, 酸辣香什麼都有,你吃過了嗎？"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
        <FoodParallelPostBox
          imgSrc={foodParallelImg2}
          title="午餐新選擇, 超值牛排商業套餐,竟然百元有找"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
        <FoodParallelPostBox
          imgSrc={foodParallelImg3}
          title="減肥又好吃的優格清單！5種吃法讓你美味又想瘦"
          tag1="# 甜點"
          tag2="# 下午茶"
        />
      </FoodParallelBox>
      <FoodBlock number="650px" />
    </>
  );
}
