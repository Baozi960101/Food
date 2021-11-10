import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { FoodApi } from "../../../API";
import { Link } from "react-router-dom";
import RightArrow from "./images/rightArrow.svg";
import LeftArrow from "./images/leftArrow.svg";
import { judgmentSourseShowImage } from "../../Home/Posts/Post";
import { TodayFoodApi } from "../../../API";

const FoodMainTitle = styled.div`
  border-bottom: 2px solid black;
  max-width: 1230px;
  margin: 10px auto 50px auto;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 600;
  color: black;
  padding-bottom: 10px;
  letter-spacing: 1.5px;

  @media screen and (max-width: 1210px) {
    width: 95%;
  }
`;

const FoodGridPostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1230px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  margin-bottom: 130px;

  @media screen and (max-width: 1210px) {
    padding: 0 10px;
  }
`;

const FoodGridPostLeft = styled(Link)`
  width: 775px;
  text-decoration: none;
  color: black;

  @media screen and (max-width: 1210px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FoodGridPostRight = styled.div`
  width: 420px;
  padding-top: 30px;
  box-sizing: border-box;

  @media screen and (max-width: 1210px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FoodGridPostLeftTag = styled.div`
  width: 100%;
  height: 20px;
  color: black;
  font-weight: 600;
  display: flex;
  margin-bottom: 10px;

  @media screen and (max-width: 1210px) {
    justify-content: center;
  }
`;
const FoodGridPostLeftImg = styled.img`
  width: 100%;
`;
const FoodGridPostLeftTitle = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: "Noto Sans TC", sans-serif;
  letter-spacing: 4px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const FoodGridPostRightImg = styled.img`
  width: 100%;
`;

const FoodGridPostRightText = styled(Link)`
  margin-top: 5px;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  box-sizing: border-box;
  color: black;
  text-decoration: none;

  @media screen and (max-width: 1210px) {
    display: flex;
    justify-content: center;
  }
`;

const FoodGridPostRightImgBox = styled.div`
  width: 420px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const FoodGridPostRightBox = ({
  imgSrcTop,
  TextTop,
  imgSrcBottom,
  TextBottom,
  toTop,
  toBottom,
}) => {
  return (
    <>
      <FoodGridPostRight>
        <FoodGridPostRightImgBox>
          <FoodGridPostRightImg alt="美食圖片" src={imgSrcTop} />
        </FoodGridPostRightImgBox>
        <FoodGridPostRightText to={toTop}>{TextTop}</FoodGridPostRightText>
        <FoodGridPostRightImgBox>
          <FoodGridPostRightImg alt="美食圖片" src={imgSrcBottom} />
        </FoodGridPostRightImgBox>
        <FoodGridPostRightText to={toBottom}>
          {TextBottom}
        </FoodGridPostRightText>
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

  @media screen and (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
  }

  @media screen and (min-width: 601px) and (max-width: 1050px) {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
  }
`;

const FoodParallelPostImgBox = styled.div`
  width: 100%;
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

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const FoodGridPostLeftImgBox = styled.div`
  overflow: hidden;
  width: 100%;
  height: 410px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FoodParallelPostBox = ({ toLink, imgSrc, title, tag1, tag2, tag3 }) => {
  return (
    <>
      <FoodParallelPost>
        <FoodParallelPostImgBox>
          <FoodParallelPostImg alt="美食圖片" src={imgSrc} />
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

const FoodGridPostLeftBox = ({ tag1, tag2, tag3, imgSrc, title, to }) => {
  return (
    <>
      <FoodGridPostLeft to={to}>
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
        <FoodGridPostLeftImgBox>
          <FoodGridPostLeftImg alt="美食圖片" src={imgSrc} />
        </FoodGridPostLeftImgBox>
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
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 2px;
  background-color: white;
  z-index: 5;
`;

const FoodBlock = ({ number }) => {
  return <div style={{ width: "100%", height: `${number}` }}></div>;
};

async function fetchFood(
  setLoad,
  setPost,
  setPage,
  setPrevPage,
  setNextPage,
  setNowLastPage
) {
  setLoad(true);
  const res = await fetch(FoodApi);
  const data = await res.json();
  setPost(data.data);
  setPage(data.meta.current_page);
  setPrevPage(data.links.prev);
  setNextPage(data.links.next);
  setNowLastPage(data.meta.last_page);
  setLoad(false);
}

async function ChangePage(
  setLoad,
  PageApi,
  setPost,
  setPage,
  setPrevPage,
  setNextPage
) {
  setLoad(true);
  const res = await fetch(PageApi);
  const data = await res.json();
  setPost(data.data);
  setPage(data.meta.current_page);
  setPrevPage(data.links.prev);
  setNextPage(data.links.next);
  setLoad(false);
}

async function fetchTodayFood(setLatestPost) {
  const res = await fetch(TodayFoodApi);
  const { data } = await res.json();
  setLatestPost(data.slice(0, 3));
  console.log(data.slice(0, 3));
}

const FoodGridPost = ({ latestPost }) => {
  //把最新3筆傳過來  做資料處理   明天繼續
  return (
    <FoodGridPostBox>
      <FoodGridPostLeftBox
        to={`${latestPost[0].crawler_No}`}
        tag1={latestPost[0].crawler_Cate}
        tag2={
          latestPost[0].crawler_Keyword === ""
            ? ""
            : `${latestPost[0].crawler_Keyword.substr(0, 30)} ...`
        }
        imgSrc={latestPost[0].crawler_PicUrl}
        title={`${latestPost[0].crawler_Title.substr(0, 20)}...`}
      />
      <FoodGridPostRightBox
        imgSrcTop={judgmentSourseShowImage(
          latestPost[1].crawler_Web,
          latestPost[1].crawler_PicUrl
        )}
        imgSrcBottom={judgmentSourseShowImage(
          latestPost[2].crawler_Web,
          latestPost[2].crawler_PicUrl
        )}
        toTop={`${latestPost[1].crawler_No}`}
        toBottom={`${latestPost[2].crawler_No}`}
        TextTop={`${latestPost[1].crawler_Title.substr(0, 22)}...`}
        TextBottom={`${latestPost[2].crawler_Title.substr(0, 22)}...`}
      />
    </FoodGridPostBox>
  );
};

export default function FoodPost() {
  const [latestPost, setLatestPost] = useState([]);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [load, setLoad] = useState(false);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [nowLastPage, setNowLastPage] = useState("");

  useEffect(() => {
    fetchTodayFood(setLatestPost);
    fetchFood(
      setLoad,
      setPost,
      setPage,
      setPrevPage,
      setNextPage,
      setNowLastPage
    );
  }, []);

  const renderContent = useMemo(
    () =>
      post.map((data) => {
        return (
          <FoodParallelPostBox
            key={data.crawler_No}
            toLink={data.crawler_No}
            imgSrc={judgmentSourseShowImage(
              data.crawler_Web,
              data.crawler_PicUrl
            )}
            title={`${data.crawler_Title.substr(0, 28)} ...`}
            tag1={data.crawler_Type}
            tag2={`${data.crawler_Keyword.substr(0, 20)} ...`}
          />
        );
      }),
    [post]
  );

  function ChangePrevPage() {
    if (page === 1) {
      window.alert("最上層囉");
      return;
    }
    topFunction();
    ChangePage(setLoad, prevPage, setPost, setPage, setPrevPage, setNextPage);
  }

  function ChangeNextPage() {
    if (page === nowLastPage) {
      window.alert("最後囉");
      return;
    }
    topFunction();
    ChangePage(setLoad, nextPage, setPost, setPage, setPrevPage, setNextPage);
  }

  return (
    <>
      {load && <Loading>載入中 ...</Loading>}
      <FoodMainTitle>最新消息</FoodMainTitle>
      {latestPost.length !== 0 && <FoodGridPost latestPost={latestPost} />}
      <FoodMainTitle style={{ maxWidth: "1260px" }}>所有</FoodMainTitle>
      <FoodParallelBox>{renderContent}</FoodParallelBox>
      <PageBox>
        <PrevButton onClick={ChangePrevPage} src={LeftArrow} />
        {page}
        <NextButton onClick={ChangeNextPage} src={RightArrow} />
      </PageBox>
      <FoodBlock number="150px" />
    </>
  );
}
