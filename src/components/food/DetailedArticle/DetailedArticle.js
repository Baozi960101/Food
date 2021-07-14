import React from "react";
import styled from "styled-components";

const DetailedArticleBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1618px;
  margin-right: auto;
  margin-left: auto;
`;

const DetailedArticleBoxLeft = styled.div`
  width: 1000px;
`;

const DetailedArticleBoxRight = styled.div`
  width: 468px;
`;

const DetailedArticleBoxLeftTitle = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 19px;
  font-size: 48px;
  letter-spacing: 6.5px;
  font-weight: 800;
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

const DetailedArticleBoxLeftText = styled.div``;

export default function DetailedArticle() {
  return (
    <>
      <DetailedArticleBox>
        <DetailedArticleBoxLeft></DetailedArticleBoxLeft>
        <DetailedArticleBoxRight></DetailedArticleBoxRight>
      </DetailedArticleBox>
    </>
  );
}
