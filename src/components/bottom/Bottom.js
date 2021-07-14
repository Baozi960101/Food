import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 248px;
  background-color: #d8d8d8;
`;

export default function HtmlBottom() {
  return (
    <>
      <Bottom>我是底部</Bottom>
    </>
  );
}
