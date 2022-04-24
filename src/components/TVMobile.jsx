import React from "react";
import styled from "styled-components";
import { device } from "../device";

const NavSection = styled.div`
  background-image: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NCNLE6BM2VDMFDWUHMIWNIIOEY.jpg);
  background-size: 80%;
  padding-top: 5vw;
  padding-bottom: 5vw;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  width: 100%;
  height: 55vw;
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
  width: 50vw;
  margin: 18vw;
  color: #313131;
`

const TVSection = ( {article} ) => {
  return (
    <Link href={article.link} target="_blank" rel="noreferrer">
    <NavSection href={article.link} target="_blank" rel="noreferrer">
    <Title>{article.title}</Title>
    </NavSection>
    </Link>
  );
};

export default TVSection;
