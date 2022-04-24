import React from "react";
import styled from "styled-components";
import { device } from "../device";

import TV from "../images/placeholder.png";

const NavSection = styled.div`
  background-image: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NCNLE6BM2VDMFDWUHMIWNIIOEY.jpg);
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

const TVSection = () => {
  return (
    <NavSection>
    </NavSection>
  );
};

export default TVSection;
