import styled from "styled-components";
import React from "react";

const PostTittleBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 67px;
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
    margin-left: 52px;
  }
`;

const PostMainProjectImg = styled.img`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;


const PostMainProjectText = styled.div`
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
        <div>{subtitle1}</div>
        <div style={{ paddingLeft: "5px" }}>{subtitle2}</div>
        <div style={{ paddingLeft: "5px" }}>{subtitle3}</div>
      </div>
      <div>
        <div style={{ color: "#a4a4a4" }}>{date}</div>
      </div>
    </PostMainProjectTextSubtitle>
  );
};

const PostMainProjectBox = ({
  imgSrc,
  tittle,
  subtitle1,
  subtitle2,
  subtitle3,
  date,
}) => {
  return (
    <PostMainProject>
      <PostMainProjectImg src={imgSrc} />
      <PostMainProjectText>{tittle}</PostMainProjectText>
      <PostMainProjectTextSubtitleMain
        subtitle1={subtitle1}
        subtitle2={subtitle2}
        subtitle3={subtitle3}
        date={date}
      />
    </PostMainProject>
  );
};

const MainPostTittle = ({
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
  return (
    <>
      <MainPostTittle
        tittleHeadder1="美"
        tittleHeadder2="食"
        subtitleHeadder="FOOD"
      />
      <PostMainProjectBox
        imgSrc={
          "http://1.bp.blogspot.com/-JnnDhJzFRbo/VFYubaj_84I/AAAAAAAAA48/zH6zZOMSRdo/s1600/%E8%80%81%E9%B7%B9%2B%E6%94%9D%E7%90%86.jpg"
        }
        tittle={"我是主文"}
        subtitle1={"#下午茶"}
        subtitle2={"#美食"}
        date={"2021/07/12"}
      />
    </>
  );
}
