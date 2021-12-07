import React from "react";
import styled from "styled-components";
import newLogo from "../../images/newLogo.jpg";

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 150px;
  background-color: white;
  border-top: 3px solid gray;
`;

export default function HtmlBottom() {
  return (
    <>
      <Bottom>
        <img width="250px" alt="嚐飽途" src={newLogo} />
      </Bottom>
    </>
  );
}
