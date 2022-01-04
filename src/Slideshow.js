import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import cover from "./images/cover.png";
import styled from "styled-components";
import coverTest01 from "./images/coverTest01.jpg";
import coverTest02 from "./images/coverTest02.jpg";

const SlideMainBox = styled.div`
  margin-bottom: 150px;
`;

const CoverImg = styled.img`
  width: 100%;
`;

const RwdBox = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    margin-top: 60px;
  }
`;

export default function Slideshow() {
  const fadeProperties = {
    duration: 1500,
    canSwipe: false,
    autoplay: true,
    // 之後改成true
    transitionDuration: 800,
    infinite: true,
    arrows: true,
    indicators: true,
  };

  return (
    <SlideMainBox>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          <RwdBox>
            <div className="each-slide">
              <CoverImg src={coverTest01} />
            </div>
          </RwdBox>
          <RwdBox>
            <div className="each-slide">
              <CoverImg src={coverTest02} />
            </div>
          </RwdBox>
          <RwdBox>
            <div className="each-slide">
              <CoverImg src={cover} />
            </div>
          </RwdBox>
          {/* <div className="each-slide">
          <CoverImg src={text01} />
        </div>
        <div className="each-slide">
          <CoverImg src={text02} />
        </div> */}
        </Slide>
      </div>
    </SlideMainBox>
  );
}
