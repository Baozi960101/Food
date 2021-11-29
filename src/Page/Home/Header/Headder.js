import React from "react";
import styled from "styled-components";
import selected01 from "./images/selected01.jpg";

const Selected = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 200px 0px;

  @media screen and (max-width: 500px) {
    margin: 50px 0;
    width: 100%;
  }
`;

const SelectedImgSize = styled.img`
  height: auto;
  max-width: 88%;

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

export default function Headder() {
  return (
    <>
      <Selected>
        <SelectedImgSize src={selected01} />
      </Selected>
    </>
  );
}
