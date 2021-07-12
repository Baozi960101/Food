import styled from "styled-components";
import React from "react";

const PostTittleBox = styled.div`
  display: flex;
  width: 100%;
  height:60px;
  justify-content: center;
  align-items:center;
`;

const PostTittleBorder = styled.div`
  width: 585px;
  height: 2px;
  background-color:#979797;
`;

const PostTittle = styled.div`
  box-sizing: border-box;
  margin: 0px 28px;
  width: 100px;
  height: 60px;
  padding-left:auto;
  padding-right:auto;
`;
const PostTittleText = ({ tittle, subtitle }) => {
  return (
    <PostTittle>
      <div style={{ fontSize: "24px", fontFamily: "LiGothicMed" }}>
        {tittle}
      </div>
      <div style={{ fontSize: "36px", fontFamily: "LiGothicMed" }}>
        {subtitle}
      </div>
    </PostTittle>
  );
};

const MainPostTittle = ({tittle,subtitle}) => {
  return (
    <PostTittleBox>
      <PostTittleBorder />
      <PostTittleText tittle={tittle} subtitle={subtitle}/>
      <PostTittleBorder />
    </PostTittleBox>
  );
};

export default function Post() {
  return (
    <>
    <MainPostTittle tittle="美食" subtitle="FOOD"/>
    </>
  );
}
