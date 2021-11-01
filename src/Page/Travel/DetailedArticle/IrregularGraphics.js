import styled from "styled-components";

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid white;
  border-right: 350px solid transparent;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  background-color: blue;
`;

export const Square = styled.div`
  width: 100%;
  height: 70px;
  background: #efda5e;
`;
