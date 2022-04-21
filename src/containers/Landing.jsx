import React from "react";
import styled from "styled-components";
import styles from "../App.css";
import ImgSrc_mobile from "../images/desktop_background.png";
import ImgSrc_desktop from "../images/desktop_background.png";
import { Desktop, MobileAndTablet } from "react-responsive-simple";
import ellipse from "../images/ellipse.png";
import Letter from "../components/Letter";

import { device } from "../device";

const TitleWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 120vh;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${device.mobile} {
    background-position: 40%;
  }
`;

const EyeLogo = styled.div`
  top: 0%;
  left: 0%;
  width: 5%;
`

const Block2 = styled.div`
  width: 60%;
  border-top: 10px solid #C4C4C4;
`

const Block = styled.div`
  width: 40%;
  float: right;
  border-bottom: 10px solid #C4C4C4;
  border-left: 10px solid #C4C4C4;
  height: 6vw;
`

const LetterHead = styled.div`
  margin-left: 5%;
  h1 {
    background-color: white;
    font-family: 'Courier New';
    width: fit-content;
    padding: 1vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const Header = styled.div`
  color: black;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 3rem;
  left: 10%;
  top: 10%;
  line-height: 8em;
  font-family: montserrat;

  h1 {
    font-size: 7rem;
  }
  @media ${device.mobile} {
    line-height: 1em !important;
    margin-top: -2rem;
    h1 {
      font-size: 3rem !important;
    }
  }
`;

const HeaderOne = styled.div`
  h1 {
    text-align: center;
    font-family: 'Courier';
    font-style: normal;
    color: #3F3F3F;
    font-size: 4rem;
    text-shadow: -5px 5px white;
  }
`;

const HeaderTwo = styled.div`
  h1 {
    text-align: center;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    color: #3F3F3F;
    text-shadow: -5px 5px white;
  }
`;

const Light = styled.div`
  background-image: url(../images/ellipse.png);
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Landing = () => {
  return (
    <div>
      <Desktop>
        <TitleWrapper img={ImgSrc_desktop}>
          <EyeLogo>
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WZKAIDANZVFV5PH57SCIT7XVIE" width="150"></img>
          </EyeLogo>
          <Header>
            <HeaderOne><h1>humans@columbia.edu</h1></HeaderOne>
            <HeaderTwo><h1>The Random Profile Issue</h1></HeaderTwo>
          </Header>
        </TitleWrapper>
        <Block2></Block2>
        <Block></Block>
        <LetterHead>
          <h1>Letter From The Editor</h1>
        </LetterHead>
        <Letter />
      </Desktop>
      <MobileAndTablet>
        <TitleWrapper img={ImgSrc_mobile}>
          <Header>
            <h1 style={{ "line-height": "2em" }}>TITLE</h1>
          </Header>
        </TitleWrapper>
      </MobileAndTablet>
    </div>
  );
};

export default Landing;
