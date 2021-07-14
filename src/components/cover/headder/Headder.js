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
  margin-top: 191px;
  margin-bottom: 333px;
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
