import React from "react";
import styled from "styled-components";
import { device } from "../device";
import tv from "../images/tv.png";

const NavSection = styled.div`
  margin-top: 1vw;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  width: 75%;
  height: 40vw;
  position: sticky;
  margin-top: 5vw;
  padding: 2vw;
`;


const Title = styled.p`
  font-family: 'Playfair Display';
  font-size: 1vw;
  font-weight: 600;
  position: absolute;
  top: 23vw;
  z-index: 1000;
  padding-left: 3vw;
  padding-right: 6vw;
  @media ${device.mobile} {
    font-size: 1em;
  }
`

const Image = styled.p`
  color: #313131;
  @media ${device.mobile} {
    font-size: 1em;
  }
  img {
    max-width: 90%;
    padding-left: 2vw;
  }
`

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;


const TVBorder = styled.a`
  img {
    max-width: 90%;
    position: absolute;
  }
    `;

const TVSection = ({ article }) => {
  return (
    <Link href={article.link} target="_blank" rel="noreferrer">
      <NavSection>
        <Title>{article.title}</Title>
        <TVBorder><img src={tv}></img></TVBorder>
        <Image><img src={article.img}></img></Image>
      </NavSection>
    </Link>
  );
};

export default TVSection;
