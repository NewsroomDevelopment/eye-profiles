import React from "react";
import styled from "styled-components";

import { device } from "../device";

const ArticleWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 19vw;
  margin: 2.25vw;
  flex-grow: 1;
  display: inline-block;
  vertical-align: top;

  @media ${device.mobile} {
    width: 95vw;
  }
`;

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;

const ArticleImg = styled.img`
  order: 0;

  margin: 24px 0px;
  position: static;
  width: 20vw;
  height: 15vw;
  left: 8px;
  top: 8px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 10px 10px;

  @media ${device.mobile} {
    width: 100%;
    height: 60vw;
  }
`;

const ArticleText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  flex: none;
  order: 1;
  margin: 12px 0px;
`;

const Title = styled.p`
  font-family: Bitter;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 38px;
  flex: none;
  order: 0;
  margin: 8px 0px;

  @media ${device.mobile} {
    width: 90vw;
  }
`;

const Author = styled.p`
  font-family: Bitter;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 29px;
  flex: none;
  order: 1;
  margin: 8px 0px;
`;

const NormalArticle = ({ article }) => {
  return (
    <ArticleWrap>
      <Link href={article.link} target="_blank" rel="noreferrer">
        <ArticleImg src={article.img} />
        <ArticleText>
          <Title>{article.title}</Title>
          <Author>{article.author}</Author>
        </ArticleText>
      </Link>
    </ArticleWrap>
  );
};

export default NormalArticle;
