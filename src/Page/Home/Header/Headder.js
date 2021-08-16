import React from "react";
import styled from "styled-components";
import Slideshow from "./Slideshow";
import selected01 from "./images/selected01.jpg";
import selected02 from "./images/selected02.png";

const Selected = styled.div`
  box-sizing: border-box;
  width: 88%;
  display: flex;
  justify-content: center;
  margin: 191px 6% 333px 6%;

  @media screen and (max-width: 600px) {
    margin: 50px 0 50px 0;
    width: 100%;
  }
`;

const SelectedImgSize = styled.img`
  height: auto;
  max-width: 100%;
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
