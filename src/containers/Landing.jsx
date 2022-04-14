import React from "react";
import styled from "styled-components";
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
    width: fit-content;
    padding: 1vw;
    border: 1rem solid #E9C898;
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
  margin-left: 20vw;
  h1 {
    border-bottom: 2px solid black;
    width: fit-content;
  }
`;

const HeaderTwo = styled.div`
  margin-left: 60vw;
  margin-top: -5vw;
  h1 {
    border-bottom: 2px solid black;
    width: fit-content;
  }
`;

const HeaderThree = styled.div`
  margin-left: 35vw;
  h1 {
    border-bottom: 2px solid black;
    width: fit-content;
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
            <HeaderOne><h1>TITLE</h1></HeaderOne>
            <HeaderTwo><h1>THIS</h1></HeaderTwo>
            <HeaderThree><h1>IS</h1></HeaderThree>
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
