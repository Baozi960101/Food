import React from "react";
import styled from "styled-components";
import foodTravelLogo from "./images/foodTravelLogo.png";

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 150px;
  background-color: #d8d8d8;
`;

export default function HtmlBottom() {
  return (
    <>
      <Bottom>
        <img width="200px" alt="嚐飽途" src={foodTravelLogo} />
      </Bottom>
    </>
  );
}
