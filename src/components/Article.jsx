import React from "react";
import styled from "styled-components";

import { device } from "../device";

const ArticleWrap = styled.div`
  width: 30vw;
  height: 714px;
  margin-top: 30%;
  background: ${(props)=> props.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  text-align: center;
  @media ${device.mobile} {
    width: 70vw;
    padding-left: 20%;
    height: 500px;
    margin-bottom: 10vw;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  left: 5%;
  background: #FFFFFF;
  text-align: center;
  @media ${device.mobile} {
    height: 80%;
  }
`

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;

const ArticleImg = styled.img`
  width: 75%;
  height: 15vw;
  background: white;
  padding-top: 3vw;
  left: 13%;
  object-fit: cover;
  align: left;
  @media ${device.mobile} {
    width: 80%;
    height: 40vw;
    padding: 2vw;
  }
`;


const ArticleText = styled.p`
  text-align: center;
  align-items: center;
  position: absolute;
  text-align: center;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 1vw;
`

const Title = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  color: #313131;
  margin-bottom: 0px;
  @media ${device.mobile} {
    font-size: 1em;
  }
`

const Author = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #313131;
  @media ${device.mobile} {
    font-size: 0.8em;
  }
`;

const Article = ({ article }) => {
  return (
    <ArticleWrap color={article.color}>
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