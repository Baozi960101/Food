import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RightArrow from "../../images/rightArrow.svg";
import LeftArrow from "../../images/leftArrow.svg";
import { judgmentSourseShowImage } from "../../SourseImage";
import { NewsTodayApi } from "../../API";

const FoodParallelBox = styled.div`
  max-width: 960px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 765px) and (max-width: 1000px) {
    max-width: 720px;
  }

  @media screen and (max-width: 764px) {
    max-width: 100%;
    margin: 20px auto 0 auto;
  }
`;

const FoodParallelPost = styled.div`
  width: 32%;
  height: 310px;
  box-sizing: border-box;

  @media screen and (max-width: 765px) {
    width: 100%;
    height: 400px;
  }
`;

const FoodParallelPostImgBox = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff7ff;
  overflow: hidden;
  border-radius: 20px;

  @media screen and (max-width: 765px) {
    height: 300px;
  }
`;

const FoodParallelPostImg = styled.img`
  max-width: 100%;
`;

const FoodParallelPostText = styled(Link)`
  width: 100%;
  height: 75px;
  margin-top: 19px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 21px;
  letter-spacing: 2.8px;
  box-sizing: border-box;
  text-decoration: none;
  color: black;

  @media screen and (max-width: 765px) {
    padding-left: 20px;
  }
`;

const FoodParallelPostTag = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 765px) {
    padding-left: 20px;
  }
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

const FoodParallelPostBox = ({ toLink, imgSrc, title, tag1, tag2, tag3 }) => {
  return (
    <>
      <FoodParallelPost>
        <FoodParallelPostImgBox>
          <FoodParallelPostImg alt="美食圖片" src={imgSrc} />
        </FoodParallelPostImgBox>
        <FoodParallelPostText to={`/${toLink}`}>{title}</FoodParallelPostText>
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

export default function Healthy() {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [load, setLoad] = useState(false);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [nowLastPage, setNowLastPage] = useState("");

  async function fetchFood(api) {
    setLoad(true);
    const res = await fetch(api);
    const data = await res.json();
    setPost(data.data);
    setPage(data.meta.current_page);
    setPrevPage(data.links.prev);
    setNextPage(data.links.next);
    setNowLastPage(data.meta.last_page);
    setLoad(false);
  }

  async function foodPageArticle() {
    const res = await fetch(
      `https://eatravel.info/eatravel/api/v1/data/showWeb`
    );
    const { data } = await res.json();
    // eslint-disable-next-line no-use-before-define
    fetchFood(
      NewsTodayApi(
        data.健康
          .map((item) => {
            return item.source_Name;
          })
          .join(),
        "healthy"
      )
    );
  }

  useEffect(() => {
    foodPageArticle(
      setLoad,
      setPost,
      setPage,
      setPrevPage,
      setNextPage,
      setNowLastPage
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = useMemo(
    () =>
      post.map((data) => {
        return (
          <FoodParallelPostBox
            key={data.crawler_No}
            toLink={data.crawler_No}
            imgSrc={judgmentSourseShowImage(
              data.crawler_No,
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
