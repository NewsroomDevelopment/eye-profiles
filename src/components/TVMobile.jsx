import React from "react";
import styled from "styled-components";
import { device } from "../device";

const NavSection = styled.div`
  padding-bottom: 5vw;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  width: 100%;
  height: 80vw;
  top: 0;
`;

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;

const Title = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  margin-left: 18vw;
  margin-right: 18vw;
  color: #313131;
  @media ${device.mobile} {
    font-size: 1.5em; 
  }
`
const Image = styled.p`
  margin-left: 14vw;
  color: #313131;
  @media ${device.mobile} {
    font-size: 1em;
  }
  img {
    max-width: 85%;
  }
`


const TVSection = ( {article} ) => {
  return (
    <Link href={article.link} target="_blank" rel="noreferrer">
    <NavSection href={article.link} target="_blank" rel="noreferrer">
      <Image><img src={article.img}></img></Image>
      <Title>{article.title}</Title>
    </NavSection>
    </Link>
  );
};

export default TVSection;
