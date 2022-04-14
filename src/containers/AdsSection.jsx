import React from "react";
import styled from "styled-components";
import NYBasics from "../images/ny_basics_ad.png";
import Zabar from "../images/zabar_ad.png";

import { device } from "../device";

import Ad from "../components/Ad";

const AdBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10%;
  padding-top: 10%;

  @media ${device.mobile} {
    display:block;
    padding-top:2%;
  }
`;

const AdsSection = () => {
  return (
    <>
      <AdBlock>
        <Ad img={Zabar} />
        <Ad img={NYBasics} />
      </AdBlock>
    </>
  );
};

export default AdsSection;
