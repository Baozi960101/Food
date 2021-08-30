import { Slide } from "react-slideshow-image";
import text01 from "./images/text01.jpg";
import text02 from "./images/text02.jpg";
import cover from "./images/cover.png";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";

const CoverImg = styled.img`
  width: 100%;
`;

export default function Slideshow() {
  const fadeProperties = {
    duration: 1500,
    canSwipe: false,
    autoplay: false,
    // 之後改成true
    transitionDuration: 800,
    infinite: true,
    arrows: true,
  };

  return (
    <div className="slide-container">
      <Slide {...fadeProperties}>
        <div className="each-slide">
          <CoverImg src={cover} />
        </div>
        {/* <div className="each-slide">
          <CoverImg src={text01} />
        </div>
        <div className="each-slide">
          <CoverImg src={text02} />
        </div> */}
      </Slide>
    </div>
  );
}
