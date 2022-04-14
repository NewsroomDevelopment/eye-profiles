import React from "react";
import styled from "styled-components";

const AdBlock = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 100%;
  height: 80vh;
`;
const Ad = ({ img }) => {
  return <AdBlock img={img} />;
};
export default Ad;
