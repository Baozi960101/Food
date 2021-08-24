import React, { useEffect, useState } from "react";
import styled from "styled-components";
import foodGridImg1 from "./images/pexels-photo-315755.png";
import foodGridImg2 from "./images/pexels-photo-3737620.png";
import { ArticleNumber } from "../../../API";
import { chunk } from "lodash";
import { Link } from "react-router-dom";
import RightArrow from "./images/rightArrow.svg";
import LeftArrow from "./images/leftArrow.svg";

const FoodGridPostBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1230px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  margin-bottom: 130px;
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
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FoodParallelPost = styled.div`
  width: 370px;
  height: 469px;
  box-sizing: border-box;
  margin: 15px 0;
`;

const FoodParallelPostImgBox = styled.div`
  width: 370px;
  height: 330px;
  display: flex;
  align-items: center;
  background-color: #fff7ff;
  overflow: hidden;
`;

const FoodParallelPostImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const FoodParallelPostText = styled(Link)`
  width: 100%;
  height: 60px;
  margin-top: 19px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 21px;
  letter-spacing: 2.8px;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
`;

const FoodParallelPostTag = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
`;

const PrevButton = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;
  cursor: pointer;
`;
const NextButton = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 30px;
  cursor: pointer;
`;

const FoodParallelPostBox = ({ toLink, imgSrc, title, tag1, tag2, tag3 }) => {
  return (
    <>
      <FoodParallelPost>
        <FoodParallelPostImgBox>
          <FoodParallelPostImg src={imgSrc} />
        </FoodParallelPostImgBox>
        <FoodParallelPostText to={`/food/post/${toLink}`}>
          {title}
        </FoodParallelPostText>
        <FoodParallelPostTag>
          <div>
            {tag1 ? "# " : ""}
            {tag1}
          </div>
          <div style={{ paddingLeft: "7px" }}>
            {tag2 ? "# " : ""}
            {tag2}
          </div>
          <div style={{ paddingLeft: "7px" }}>
            {tag3 ? "# " : ""}
            {tag3}
          </div>
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
          <div>
            {tag1 ? "# " : ""}
            {tag1}
          </div>
          <div style={{ paddingLeft: "7px" }}>
            {tag2 ? "# " : ""}
            {tag2}
          </div>
          <div style={{ paddingLeft: "7px" }}>
            {tag3 ? "# " : ""}
            {tag3}
          </div>
        </FoodGridPostLeftTag>
        <FoodGridPostLeftImg src={imgSrc} />
        <FoodGridPostLeftTitle>{title}</FoodGridPostLeftTitle>
      </FoodGridPostLeft>
    </>
  );
};

const PageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 9%;
  margin-top: 15px;
  box-sizing: border-box;
  font-size: 23px;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2300px;
  overflow: hidden;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 2px;
  position: absolute;
  background-color: white;
  z-index: 5;
`;

const FoodBlock = ({ number }) => {
  return <div style={{ width: "100%", height: `${number}` }}></div>;
};

export default function FoodPost() {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    ArticleNumber(50).then((data) => {
      const newChunk = chunk(data, 9);
      setPost(newChunk);
      setLoad(false);
    });
  }, []);

  function renderContent() {
    return (
      <>
        {post[page] &&
          post[page].map((data) => {
            return (
              <FoodParallelPostBox
                key={data.crawler_No}
                toLink={data.crawler_No}
                imgSrc={data.crawler_PicUrl}
                title={data.crawler_Title}
                tag1={data.crawler_Type}
                tag2={`${data.crawler_Keyword.substr(0, 20)} ...`}
              />
            );
          })}
      </>
    );
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function prev() {
    if (page === 0) {
      return;
    }
    setPage((prevPage) => prevPage - 1);
    topFunction();
  }

  function next() {
    if (page === post.length - 1) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
    topFunction();
  }

  return (
    <>
      {load && <Loading>載入中 ...</Loading>}
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
      <FoodParallelBox>{renderContent()}</FoodParallelBox>
      <PageBox>
        <PrevButton onClick={prev} src={LeftArrow} />
        {page + 1}
        <NextButton onClick={next} src={RightArrow} />
      </PageBox>
      <FoodBlock number="150px" />
    </>
  );
}
