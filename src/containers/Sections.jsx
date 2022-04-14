import React from "react";
import styled from "styled-components";

import Letter from "../components/Letter";
import Nav from "../components/Nav";
import AdsSection from "./AdsSection";
import WritingSection from "./WritingSection";
import Credits from "./Credits";

import WritingData from "../utils/WritingData";

import { device } from "../device";

const Columns = styled.div`
  display: flex;
  width: 100%;
`;
const NavColumn = styled.div`
  width: 25%;

  @media ${device.mobile} {
    width:0;
  }
`;

const ArticleColumn = styled.div`
  padding: 5%;

  @media ${device.mobile} {
    width:100%;
    padding-right:0%;
  }
`;

const YellowBox = styled.div`
  position: flex;
  width: 964px;
  height: 199px;
  left: 94px;
  top: 3132px;

  background: #E9C898;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`
const WhiteBox = styled.div`
  position: relative;
  width: 897px;
  height: 150px;
  left: 3.5%;
  background: #FFFFFF;
`

const Title = styled.div`
  position: relative;
  width: 833.62px;
  height: 109.45px;
  left: 25%;
  top: 10%;


  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 107px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #313131;
`;


const Sections = () => {
  return (
    <>
      <Columns>
        <ArticleColumn>
          <Letter />
          <YellowBox>
          <WhiteBox>
            <Title>All Features</Title>
          </WhiteBox>
          </YellowBox>
          {Object.keys(WritingData).map((key, index) => (
            <WritingSection
              title={key}
              articles={WritingData[key]}
            />
          ))}
        </ArticleColumn>
      </Columns>
    </>
  );
};

export default Sections;
