import React from "react";
import styled from "styled-components";

import { device } from "../device";

const Title = styled.p`
  font-family: Bitter;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */
  text-transform: capitalize;
  letter-spacing: 0.02em;
  max-width: 100%;
  position: relative;
  text-align: ${(prop) => (prop.linePosition === "after" ? "left" : "right")};

  @media ${device.mobile} {
    padding:2%;    
  }
  /* Blue 02 */

  color: #1c5185;

  :${(prop) => prop.linePosition} {
    content: "";
    display: block;
    width: ${(prop) => 93 - prop.length * 2}%;
    height: 3px;
    background: #191970;
    ${(prop) => (prop.linePosition === "before" ? "left" : "right")}: 0;
    top: 50%;
    position: absolute;

    @media ${device.mobile} {
      width: ${(prop) => 93 - prop.length * 7}%;
    }
  }
`;
const SectionTitle = ({ linePosition, title }) => {
  return (
    <Title length={title.length} linePosition={linePosition}>
      {title}
    </Title>
  );
};

export default SectionTitle;
