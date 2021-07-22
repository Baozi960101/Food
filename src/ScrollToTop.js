import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import UpArrow from "./components/App/images/UpArrow.svg";

const TopBottom = styled.img`
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function ScrollToTopBottom() {
  const [topBottomArise, setTopBottomArise] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setTopBottomArise(true);
    } else {
      setTopBottomArise(false);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return <TopBottom onClick={topFunction} src={UpArrow} />;
}
