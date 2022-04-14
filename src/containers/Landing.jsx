import React from "react";
import styled from "styled-components";
import ImgSrc_mobile from "../images/desktop_background.png";
import ImgSrc_desktop from "../images/desktop_background.png";
import { Desktop, MobileAndTablet } from "react-responsive-simple";

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
  padding-left: 5%;
`

const Header = styled.div`
  color: black;
  margin-top: 6rem;
  margin-right: 1rem;
  padding: 3rem;
  left: 10%;
  top: 15%;
  line-height: 10em;
  font-family: montserrat;

  h1 {
    font-size: 5rem;
  }
  @media ${device.mobile} {
    line-height: 1em !important;
    margin-top: -2rem;
    h1 {
      font-size: 3rem !important;
    }
  }
`;

const Landing = () => {
  return (
    <div>
      <Desktop>
        <TitleWrapper img={ImgSrc_desktop}>
          <EyeLogo>
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WZKAIDANZVFV5PH57SCIT7XVIE" width="150"></img>
          </EyeLogo>
          <Header>
            <h1>The Eye Profiles</h1>
          </Header>
        </TitleWrapper>
        <Block2></Block2>
        <Block></Block>
        <LetterHead>
          <h1>Letter From The Editor</h1>
        </LetterHead>
      </Desktop>
      <MobileAndTablet>
        <TitleWrapper img={ImgSrc_mobile}>
          <Header>
            <h1 style={{ "line-height": "2em" }}>Mental health on campus</h1>
          </Header>
        </TitleWrapper>
      </MobileAndTablet>
    </div>
  );
};

export default Landing;
