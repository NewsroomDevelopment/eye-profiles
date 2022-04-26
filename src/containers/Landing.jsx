import React from "react";
import styled from "styled-components";
import styles from "../App.css";
import { Desktop, MobileAndTablet } from "react-responsive-simple";
import Letter from "../components/Letter";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { device } from "../device";

const TitleWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const EyeLogo = styled.div`
  top: 0%;
  left: 0%;
  width: 10%;
  @media ${device.mobile} {
    img {
      width: 25vw;
    }
  }
`
const LetterHead = styled.div`
  margin-left: 5%;
  h1 {
    padding-bottom: 30vw;
    text-align: center;
    background-color: #9ACABD;
    color: white;
    font-family: 'Playfair Display';
    width: 90%;
    padding: 1vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1rem solid #AADBCE;
  }
  @media ${device.mobile} {
    margin-top: 2rem;
    h1 {
      font-size: 2rem;
      text-align: center;
      width: 85%;
    }
  }
`

const SlotsHead = styled.div`
  margin-left: 5%;
  h1 {
    padding-bottom: 30vw;
    text-align: center;
    background-color: #9ACABD;
    color: white;
    font-family: 'Playfair Display';
    width: 90%;
    padding: 1vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1rem solid #AADBCE;
  }
  @media ${device.mobile} {
    margin-top: 2rem;
    h1 {
      font-size: 2rem;
      text-align: center;
      width: 85%;
    }
  }
`

const Header = styled.div`
  color: black;
  margin: 1vw;
  line-height: 2em;
  font-family: montserrat;

  @media ${device.laptopS} {
    h1 {
      text-align: center;
      font-family: 'Playfair Display';
      font-style: normal;
      color: #3F3F3F;
      font-size: 7vw;
    }
    h3 {
      font-size: 2vw;
      text-align: center;
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 700;
      color: #3F3F3F;
    }
  }
  
  @media ${device.mobile} {
    margin-top: 2rem;
    h1 {
      text-align: center;
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 700;
      color: #3F3F3F;
      font-size: 7vw;
    }
  
    h3 {
      text-align: center;
      font-family: 'Playfair Display';
      font-style: normal;
      color: #3F3F3F;
      font-size: 4vw;
    }
  }
`;

const HeaderOne = styled.div`
  h1 {
    text-align: center;
    font-family: 'Playfair Display';
    font-style: normal;
    color: #3F3F3F;
    font-size: 7vw;
  }
`;

const HeaderTwo = styled.div`
  h1 {
    font-size: 2vw;
    text-align: center;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    color: #3F3F3F;
  }
`;

const R = styled.span`
  color: #8BBA91;
`
const A = styled.span`
  color: #AADBCE;
`
const N = styled.span`
  color: #DF948F;
`
const D = styled.span`
  color: #99B1DE;
`
const O = styled.span`
  color: #E3B57E;
`
const M = styled.span`
  color: #DBADAA;
`

const Landing = () => {
  return (
    <div>
      <Desktop>
        <TitleWrapper>
          <EyeLogo>
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WZKAIDANZVFV5PH57SCIT7XVIE" width="180"></img>
          </EyeLogo>
          <Header>
            <HeaderOne><h1>"HUMANS@COLUMBIA.EDU"</h1></HeaderOne>
            <HeaderTwo><h1>The Eye's <R>R</R><A>a</A><N>n</N><D>d</D><O>o</O><M>m</M> Profile Issue</h1></HeaderTwo>
          </Header>
        </TitleWrapper>
        <LetterHead>
        <h1><a href="https://www.columbiaspectator.com/the-eye/2022/04/24/letter-from-the-editors-the-profile-issue/">Letter From The Editors</a></h1>
        </LetterHead>
        <Letter />
        <SlotsHead>
          <h1>"Randomly generate" a UNI below!</h1>
        </SlotsHead>
      </Desktop>
      <MobileAndTablet>
      <EyeLogo>
            <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WZKAIDANZVFV5PH57SCIT7XVIE" width="180"></img>
          </EyeLogo>
        <TitleWrapper>
          <Header>
            <h1>"HUMANS@COLUMBIA.EDU"</h1>
            <h3 style={{ "line-height": "1.2em" }}>The Eye's <br /><R>R</R><A>a</A><N>n</N><D>d</D><O>o</O><M>m</M> Profile Issue</h3>
          </Header>
        </TitleWrapper>
        <LetterHead>
          <h1><a href="https://www.columbiaspectator.com/the-eye/2022/04/24/letter-from-the-editors-the-profile-issue/">Letter From The Editors</a></h1>
        </LetterHead>
        <Letter />
        <SlotsHead>
          <h1>"Randomly generate" a UNI below!</h1>
        </SlotsHead>
      </MobileAndTablet>
    </div>
  );
};

export default Landing;
