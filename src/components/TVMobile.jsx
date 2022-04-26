import React from "react";
import styled from "styled-components";
import { device } from "../device";
import tv from "../images/tv.png";


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
  text-align: center;
  margin-left: 15vw;
  margin-right: 15vw;
  color: #313131;
  position: absolute;
  z-index: 1000;
  margin-top: 55vw;
  @media ${device.mobile} {
    font-size: 3vw; 
  }
`
const Image = styled.p`
  margin-left: 8vw;
  color: #313131;
  img {
    max-width: 90%;
  }
`

const TVBorder = styled.a`
  img {
    max-width: 90%;
    position: absolute;
    padding-left: 5%;
  }
`


const TVSection = ({ article }) => {
  return (
    <Link href={article.link} target="_blank" rel="noreferrer">
      <NavSection href={article.link} target="_blank" rel="noreferrer">
        <Title>{article.title}</Title>
        <TVBorder><img src={tv}></img></TVBorder>
        <Image><img src={article.img}></img></Image>
      </NavSection>
    </Link>
  );
};

export default TVSection;
