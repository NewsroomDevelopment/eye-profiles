import React from "react";
import styled from "styled-components";
import { device } from "../device";
import tv from "../images/tv.jpg";

const NavSection = styled.div`
  margin-top: 1vw;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
  width: 75%;
  height: 30vw;
  position: sticky;
  margin-top: 5vw;
  padding: 2vw;
  border: 1rem solid #AADBCE;
`;


const Title = styled.p`
  font-family: 'Playfair Display';
  font-size: 1.5em;
  font-weight: 600;
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
    max-width: 100%;
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
      <Image><img src={article.img}></img></Image>
      <Title>{article.title}</Title>
    </NavSection>
    </Link>
  );
};

export default TVSection;
