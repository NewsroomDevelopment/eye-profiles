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
  h1 {
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
    h1 {
      font-size: 2rem;
      text-align: center;
      width: 85%;
    }
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
