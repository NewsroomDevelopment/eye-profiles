import React from "react";
import styled from "styled-components";

import Test from "../components/Test";
import Nav from "../components/Nav";
import AdsSection from "./AdsSection";
import WritingSection from "./WritingSection";
import Credits from "./Credits";

import WritingData from "../utils/WritingData";
import VisualData from "../utils/VisualData";
import { Desktop, MobileAndTablet } from "react-responsive-simple";

import { device } from "../device";

const Columns = styled.div`
  display: flex;
  width: 100%;
`;

const ArticleColumn = styled.div`
  width: 100%;
  @media ${device.mobile} {
    width:100%;
    padding-right:0%;
  }
`;

const Sections = () => {
  return (
    <>
      <Desktop>
        <Columns>
          {/* <NavColumn>
            <Nav />
          </NavColumn> */}
          <ArticleColumn>
            {Object.keys(WritingData).map((key, index) => (
              <WritingSection
                title={key}
                articles={WritingData[key]}
                linePosition={index % 2 === 0 ? "after" : "before"}
              />
            ))}
          </ArticleColumn>
        </Columns>
        {/*<Credits />*/}
      </Desktop>
      <MobileAndTablet>
        <Columns>
          {/* <NavColumn>
            <Nav />
          </NavColumn> */}
          <ArticleColumn>
            {Object.keys(WritingData).map((key, index) => (
              <WritingSection
                title={key}
                articles={WritingData[key]}
                linePosition={index % 2 === 0 ? "after" : "before"}
              />
            ))}
          </ArticleColumn>
        </Columns>
      </MobileAndTablet>
    </>
  );
};

export default Sections;
