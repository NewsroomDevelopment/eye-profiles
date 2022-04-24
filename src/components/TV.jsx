import React from "react";
import styled from "styled-components";
import { device } from "../device";

import TV from "../images/placeholder.png";

const NavSection = styled.div`
  background-image: url(${TV});
  background-li
  background-size: 80%;
  margin-left: 4vw;
  margin-top: -5vw;
  margin-bottom: -5vw;
  padding-top: 2vw;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  width: 100%;
  height: 40vw;
  position: sticky;
  top: 0;
  border-right: 10px solid #784A3C;
`;


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

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;

const TVSection = ({article}) => {
  return (
    <Link href={article.link} target="_blank" rel="noreferrer">
    <NavSection>
      <Title>{article.title}</Title>
    </NavSection>
    </Link>
  );
};

export default TVSection;
