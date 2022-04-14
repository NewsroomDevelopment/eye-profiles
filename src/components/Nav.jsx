import React from "react";
import styled from "styled-components";
import { device } from "../device";

import NavImg from "../images/nav.png";

const NavSection = styled.div`
  background-image: url(${NavImg});
  background-size: contain;
  margin-top: 20%;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: left;
  width: 100%;
  height: 45vw;
  position: sticky;
  top: 0;

  @media ${device.tablet} {
    display: none;
  }
`;

const SectionNav = styled.div`
  position: relative;
  font-size: 1.75rem;
  line-height: 1.85em;
  color: white;
  font-weight: bold;
  left: ${(props) => props.left}vw;
`;

const NavText = styled.div`
  margin-top: 5vw;
`;

const Nav = () => {
  const sections = {
    news: 7,
    opinion: 10,
    "a&e": 13,
    sports: 8,
    podcasts: 5,
    spectrum: 4,
    photo: 7,
    illustrations: 3,
    graphics: 4,
  };
  return (
    <NavSection>
      <NavText>
        {Object.keys(sections).map((section) => (
          <SectionNav left={sections[section]}>
            <a href={`#${section}`}>{section}</a>
          </SectionNav>
        ))}
      </NavText>
    </NavSection>
  );
};

export default Nav;
