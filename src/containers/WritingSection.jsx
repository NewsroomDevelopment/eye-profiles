import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import Article from "../components/Article";
import { device } from "../device";


const Panel1 = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1200px) {
    width: 23%;
  }
`;
const Panel2 = styled.div`
  margin-top: 10%;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1200px) {
    width: 23%;
  }
`;

const PanelContainer = styled.div`
  display: flex;
  width: 70%;
  margin-left:7%;
  justify-content: space-between;

  @media ${device.mobile} {
    display: block;
  }
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
      </PanelContainer>
    </>
  );
};

export default WritingSection;
