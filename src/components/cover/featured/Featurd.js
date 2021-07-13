import styled from "styled-components";
import FeaturdTitleImg1 from "./images/pexels-valeria-boltneva-842571.png";
import FeaturdTitleImg2 from "./images/pexels-valeria-boltneva-874254.png"

const FeaturedBigTitle = styled.div`
  width: 318px;
  height: 113px;
  margin: 243px auto 253px auto;
`;

const FeaturedBigTitleTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 10px;
  font-family: "Open Sans", sans-serif;
`;

const FeaturedBigTitleBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: "Noto Sans TC", sans-serif;
  letter-spacing: 18px;
`;

const BigTitle = ({ topTitle, bottomTitle }) => {
  return (
    <FeaturedBigTitle>
      <FeaturedBigTitleTop>{topTitle}</FeaturedBigTitleTop>
      <FeaturedBigTitleBottom>{bottomTitle}</FeaturedBigTitleBottom>
    </FeaturedBigTitle>
  );
};

const FeaturdImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FeaturdImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const FeaturdImgLabel = styled.div`
  max-width: 1330px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin:16px auto 0 auto;
`;

const FeaturdImgLabelLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 700;
`;

const FeaturdImgLabelRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: #a4a4a4;
`;

const FeaturdImgBigTitle = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:42px;
  font-size:42px;
  font-family: "Noto Sans TC", sans-serif;
  margin-top:25px;
`
const FeaturdBorder = styled.div`
  width: 600px;
  height: 2px;
  background-color: #979797;
  margin:106px auto 117px auto;
`;

const FeaturdBox = ({
  srcImg,
  heaturdText1,
  heaturdText2,
  heaturdText3,
  date,
  heaturdTitle
}) => {
  return (
    <>
      <FeaturdImgBox>
        <FeaturdImg src={srcImg} />
      </FeaturdImgBox>
      <FeaturdImgLabel>
        <FeaturdImgLabelLeft>
          <div>{heaturdText1}</div>
          <div style={{ paddingLeft: "7px" }}>{heaturdText2}</div>
          <div style={{ paddingLeft: "7px" }}>{heaturdText3}</div>
        </FeaturdImgLabelLeft>
        <FeaturdImgLabelRight>{date}</FeaturdImgLabelRight>
      </FeaturdImgLabel>
      <FeaturdImgBigTitle>{heaturdTitle}</FeaturdImgBigTitle>
    </>
  );
};

export default function Featurd() {
  return (
    <>
      <BigTitle topTitle="SELECTED" bottomTitle="本期精選" />
      <FeaturdBox srcImg={FeaturdTitleImg1} heaturdTitle="仙女的早餐新提案！五分鐘快速上桌❤️💛🧡" heaturdText1="#甜點" heaturdText2="#下午茶" date="2021/07/07"/>
      <FeaturdBorder/>
      <FeaturdBox srcImg={FeaturdTitleImg2} heaturdTitle="疫情要吃什麼？折扣外帶懶人包！" heaturdText1="#甜點" heaturdText2="#下午茶" date="2021/07/07"/>
    </>
  );
}
