import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import Article from "../components/Article"
import { device } from "../device";

const Panel1 = styled.div`
  width: 23%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    display:none;
  }
  @media ${device.mobile} {
    display:none;
  }
`;
const Panel2 = styled.div`
  margin-top: 10%;
  width: 23%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    display:none;
  }
  @media ${device.mobile} {
    display:none;
  }
`;

const MobilePanel = styled.div`
  display: none;
  @media ${device.tablet} {
    margin-top: 10%;
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  @media ${device.mobile} {
    margin-top: 10%;
    width: 23%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;
const PanelContainer = styled.div`
  display: flex;
  width: 70%;
  margin-left:7%;
  
  
  justify-content: space-between;
  
`;

const WritingSection = ({ title, articles, linePosition }) => {
  return (
    <>
      <PanelContainer>
        <Panel1>
          {articles.map(function(article, i){
            if(i%2 == 0){
              return <Article article={article} />
            }
          })}
        </Panel1>
        <Panel2>
          {articles.map(function(article, i){
            if(i%2 != 0){
              return <Article article={article} />
            }
          })}
        </Panel2>
        <MobilePanel>
          {articles.map(function(article, i){
            if(i%2 != 0){
              return <Article article={article} />
            }
          })}
        </MobilePanel>
        
      </PanelContainer>
      
    </>
  );
};

export default WritingSection;
