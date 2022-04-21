import React from "react";
import styled from "styled-components";

import { device } from "../device";

const ArticleWrap = styled.div`
  width: 200%;
  height: 714px;
  margin-top: 70%;

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
  width: 75%;
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
  margin: 2vw;
`

const Title = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
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

const Article = ({ article }) => {
  return (
    <ArticleWrap>
      <Wrap>
        <Link href={article.link} target="_blank" rel="noreferrer">
          <ArticleImg src={article.img} />
          <ArticleText>
            <Title>{article.title}</Title>
            <Author>{article.author}</Author>
          </ArticleText>
        </Link>
      </Wrap>
    </ArticleWrap>
  );
};

export default Article;