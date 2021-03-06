import React, { useEffect, useState } from "react";
import styled from "styled-components";
import down from "./images/down.svg";
import menu from "./images/menu.svg";
import { Link } from "react-router-dom";
import upArrow from "./images/upArrow.svg";
import newLogo from "../../images/newLogo.jpg";

const MainFieldHeadder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  color: white;
  position: fixed;
  z-index: 5;

  @media screen and (max-width: 600px) {
    height: 60px;
    background-color: white;
  }
`;

const CoverHeadderText = styled.div`
  height: 100%;
  display: flex;
  width: 450px;
  justify-content: space-between;
  align-items: center;
  margin-right: 10%;
  color: black;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MenuBox = styled.div`
  display: flex;
  width: 0;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
  z-index: 5;

  ${(props) => props.$move && `width:100%`}
`;

const CoverHeadderTitle = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  position: relative;

  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

const HeaderTitle = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  letter-spacing: 12px;
  font-family: "PingFangTC";
  font-size: 16px;
  padding-left: 25px;

  :hover {
    color: red;
  }

  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

const ImgSize = styled.img`
  width: 7px;
  height: 7px;
  box-sizing: border-box;
  margin-left: 7px;
`;

const MenuSize = styled.img`
  display: none;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const MenuLeft = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
    height: 0px;
    background-color: #eee8d3;
  }
`;

const MenuLeftTopHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
`;

const MenuLeftMainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px 30px;
`;

const MenuLeftSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  text-decoration: none;
  font-size: 20px;
  color: black;
  font-weight: 600;
  cursor: pointer;
`;

const MenuBackground = styled.div`
  width: 20%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
`;

const DownImg = () => {
  return <ImgSize src={down} />;
};

const MainFieldHeadderTitle = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  margin-left: 10%;
  font-family: "PingFangTC";
  color: black;

  @media screen and (max-width: 600px) {
    width: 250px;
    margin-right: 10%;
    margin-left: 5%;
  }
`;

const TopBottom = styled.img`
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const TopBlock = styled.div`
  width: 100%;
  height: 70px;

  @media screen and (max-width: 600px) {
    display: none;
    height: 80px;
  }
`;

const HeaderDownTitleLink = styled(Link)`
  text-decoration: none;
`;

const HeaderDownTitle = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  padding-top: 10px;
  color: black;
  width: 100%;
  letter-spacing: 12px;
  :hover {
    color: red;
  }
`;

const FoodDown = styled.div`
  width: 100%;
  max-height: 0px;
  overflow: hidden;
  position: absolute;
  transition: max-height 0.3s ease-in-out;
  z-index: 3;
  box-sizing: border-box;
  border-top: 0;

  ${(props) => props.$move && `max-height:600px;border-top:1px solid black;`}
`;

const HeaderDownTitleBox = ({ to, text, letter }) => {
  return (
    <HeaderDownTitleLink to={to}>
      <HeaderDownTitle style={{ letterSpacing: letter }}>
        {text}
      </HeaderDownTitle>
    </HeaderDownTitleLink>
  );
};

const MenuLeftSubTitleText = styled(Link)`
  width: 80%;

  height: 0px;
  text-decoration: none;
  font-size: 16px;
  color: black;
  font-weight: 600;
  padding-left: 30px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  ${(props) => props.$move && `height:50px;`}
`;

export default function Header() {
  const [topBottomArise, setTopBottomArise] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const [foodDropDown, setFoodDropDown] = useState(false);
  const [travelDropDown, setTravelDropDown] = useState(false);
  const [healthyDropDown, setHealthyDropDown] = useState(false);
  const [entertainmentDropDown, setEntertainmentDropDown] = useState(false);

  const [foodDropDownRwd, setFoodDropDownRwd] = useState(false);
  const [travelDropDownRwd, setTravelDropDownRwd] = useState(false);
  const [healthyDropDownRwd, setHealthyDropDownRwd] = useState(false);
  const [entertainmentDropDownRwd, setEntertainmentDropDownRwd] =
    useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function HandleMenu() {
    if (menuOn) {
      setMenuOn(false);
    } else {
      setMenuOn(true);
    }
  }

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

  function dropDownOn(setDropDown) {
    setDropDown(true);
  }

  function dropDownOff(setDropDown) {
    setDropDown(false);
  }

  function handleDropDown(foodDropDownRwd, setFoodDropDownRwd) {
    setFoodDropDownRwd(!foodDropDownRwd);
  }

  return (
    <>
      <MenuBox $move={menuOn}>
        <MenuLeft>
          <MenuLeftTopHeader />
          <MenuLeftMainBox>
            <MenuLeftSubTitle
              onClick={() => {
                handleDropDown(travelDropDownRwd, setTravelDropDownRwd);
              }}
            >
              ??????
              <ImgSize
                style={{ width: "12px", height: "12px", marginTop: "6px" }}
                src={down}
              />
            </MenuLeftSubTitle>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ?????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ?????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ?????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={travelDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ????????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitle
              onClick={() => {
                handleDropDown(foodDropDownRwd, setFoodDropDownRwd);
              }}
            >
              ??????
              <ImgSize
                style={{ width: "12px", height: "12px", marginTop: "6px" }}
                src={down}
              />
            </MenuLeftSubTitle>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ?????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ????????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ????????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={foodDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ????????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitle
              onClick={() => {
                handleDropDown(healthyDropDownRwd, setHealthyDropDownRwd);
              }}
            >
              ??????
              <ImgSize
                style={{ width: "12px", height: "12px", marginTop: "6px" }}
                src={down}
              />
            </MenuLeftSubTitle>
            <MenuLeftSubTitleText
              $move={healthyDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={healthyDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={healthyDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ????????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitle
              onClick={() => {
                handleDropDown(
                  entertainmentDropDownRwd,
                  setEntertainmentDropDownRwd
                );
              }}
            >
              ??????
              <ImgSize
                style={{ width: "12px", height: "12px", marginTop: "6px" }}
                src={down}
              />
            </MenuLeftSubTitle>
            <MenuLeftSubTitleText
              $move={entertainmentDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ????????????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={entertainmentDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={entertainmentDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ??????
            </MenuLeftSubTitleText>
            <MenuLeftSubTitleText
              $move={entertainmentDropDownRwd}
              onClick={HandleMenu}
              to="/"
            >
              ?????????
            </MenuLeftSubTitleText>
          </MenuLeftMainBox>
        </MenuLeft>
        <MenuBackground onClick={HandleMenu} />
      </MenuBox>
      <MainFieldHeadder>
        <MainFieldHeadderTitle to="/">
          <img
            style={{ width: "115px", marginTop: "8px" }}
            alt="?????????"
            src={newLogo}
          />
        </MainFieldHeadderTitle>
        <CoverHeadderText>
          <CoverHeadderTitle
            onMouseOver={() => {
              dropDownOn(setTravelDropDown);
            }}
            onMouseOut={() => {
              dropDownOff(setTravelDropDown);
            }}
            to="/travel"
          >
            <HeaderTitle>
              ??????
              <DownImg />
            </HeaderTitle>
            <FoodDown $move={travelDropDown}>
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox letter="8px" text="?????????" />
              <HeaderDownTitleBox letter="8px" text="?????????" />
              <HeaderDownTitleBox letter="8px" text="?????????" />
              <HeaderDownTitleBox letter="5px" text="????????????" />
            </FoodDown>
          </CoverHeadderTitle>
          <CoverHeadderTitle
            onMouseOver={() => {
              dropDownOn(setFoodDropDown);
            }}
            onMouseOut={() => {
              dropDownOff(setFoodDropDown);
            }}
            to="/food"
          >
            <HeaderTitle>
              ??????
              <DownImg />
            </HeaderTitle>
            <FoodDown $move={foodDropDown}>
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox letter="8px" text="?????????" />
              <HeaderDownTitleBox letter="5px" text="????????????" />
              <HeaderDownTitleBox letter="5px" text="????????????" />
              <HeaderDownTitleBox letter="5px" text="????????????" />
            </FoodDown>
          </CoverHeadderTitle>
          <CoverHeadderTitle
            onMouseOver={() => {
              dropDownOn(setHealthyDropDown);
            }}
            onMouseOut={() => {
              dropDownOff(setHealthyDropDown);
            }}
            to="/healthy"
          >
            <HeaderTitle>
              ??????
              <DownImg />
            </HeaderTitle>
            <FoodDown $move={healthyDropDown}>
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox letter="3px" text="????????????" />
            </FoodDown>
          </CoverHeadderTitle>
          <CoverHeadderTitle
            onMouseOver={() => {
              dropDownOn(setEntertainmentDropDown);
            }}
            onMouseOut={() => {
              dropDownOff(setEntertainmentDropDown);
            }}
            to="/casual"
          >
            <HeaderTitle>
              ??????
              <DownImg />
            </HeaderTitle>
            <FoodDown $move={entertainmentDropDown}>
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox text="??????" />
              <HeaderDownTitleBox letter="5px" text="?????????" />
              <HeaderDownTitleBox letter="3px" text="????????????" />
            </FoodDown>
          </CoverHeadderTitle>
          {/* <CoverHeadderTitle to="/">
            <SearchImg src={search} />
          </CoverHeadderTitle> */}
        </CoverHeadderText>
        <MenuSize src={menu} onClick={HandleMenu} />
      </MainFieldHeadder>
      <TopBlock />
      {topBottomArise && <TopBottom onClick={topFunction} src={upArrow} />}
    </>
  );
}
