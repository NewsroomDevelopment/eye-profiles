import React from "react";
import styled from "styled-components";
import { device } from "../device";

import TV from "../images/placeholder.png";

const NavSection = styled.div`
  background-image: url(${TV});
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

const TVSection = () => {
  return (
    <NavSection>
    </NavSection>
  );
};

export default TVSection;
