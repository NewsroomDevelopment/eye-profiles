import React from "react";
import styled from "styled-components";
import WritingSection from "./WritingSection";

import WritingData from "../utils/WritingData";
import { Desktop, MobileAndTablet } from "react-responsive-simple";

import { device } from "../device";

const Columns = styled.div`
  display: flex;
  width: 100%;
  
  @media ${device.mobile} {
    display: block !important;
  }
`;

const ArticleColumn = styled.div`
  width: 100%;
  @media ${device.mobile} {
    width:50%;
    margin-left:11%;
  }
`;

const IssueHead = styled.div`
  margin-left: 5%;

  padding-left: 3vw;
  h1 {
    background-color: #768DB9;
    color: white;
    font-family: 'Playfair Display';
    width: 60%;
    padding-left: 11vw;
    padding-right: 10vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1rem solid #99B1DE;
  }
`

const Sections = () => {
  return (
    <>
    <IssueHead>
          <h1>All Features</h1>
        </IssueHead>
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
