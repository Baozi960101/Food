import React from "react";
import styled from "styled-components";
import Slideshow from "./Slideshow";
import selected01 from "./images/selected01.jpg";
import selected02 from "./images/selected02.png";

const Selected = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 191px 0 333px 0;

  @media screen and (max-width: 500px) {
    margin: 50px 0;
    width: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 1600px) {
    margin: 80px 0;
    justify-content: center;
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
      <Slideshow />
      <Selected>
        <SelectedImgSize src={selected01} />
      </Selected>
      <Selected>
        <SelectedImgSize src={selected02} />
      </Selected>
    </>
  );
}
