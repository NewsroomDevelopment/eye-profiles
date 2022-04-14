import React from "react";
import styled from "styled-components";

import { device } from "../device";

const ArticleWrap = styled.div`
  width: 586px;
  height: 714px;
  left: 246px;
  top: 4506px;
  margin: 30px;
  background: #E9C898;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  text-align: center;
  @media ${device.mobile} {
    width: 95vw;
  }
`;
const Wrap = styled.div`
  position: relative;
  margins: 10px;
  width: 90%;
  height: 90%;
  left: 5%;
  background: #FFFFFF;
  text-align: center;
`

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;

const ArticleImg = styled.img`
  width: 386px;
  height: 242px;
  background: #C4C4C4;
  left: 13%;
  top: 8%;
  position: absolute;
  @media ${device.mobile} {
    width: 100%;
    height: 60vw;
  }
`;


const ArticleText = styled.p`
  text-align: center;
  align-items: center;
  top: 40%;
  position: absolute;
  text-align: center;
`

const Title = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #313131;
  margin-bottom: 0px;
`

const Author = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #313131;
`;


const Details = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #000000;
  margin: 10px;
`


const Article = ({ article }) => {
  return (
    <ArticleWrap>
      <Wrap>
        <Link href={article.link} target="_blank" rel="noreferrer">
          <ArticleImg src={article.img} />
          <ArticleText>
            <Title>{article.title}</Title>
            <Author>{article.author}</Author>
            <Details>{article.description}</Details>
          </ArticleText>
        </Link>
      </Wrap>
    </ArticleWrap>
  );
};

export default Article;
