import React from "react";
import styled from "styled-components";
import TV from "../components/TV";
import { device } from "../device";
import slotsplace from "../images/slotsplace.png";


const Columns = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 10px solid #C4C4C4;
  padding-bottom: 5vw;
`;

const TVColumn = styled.div`
  width: 60%;

  @media ${device.mobile} {
    width:0;
  }
`;

const ArticleColumn = styled.div`
  width: 40%;
  padding-left: 5vw;
  padding-right: 2vw;

  @media ${device.mobile} {
    width:100%;
    padding-right:0%;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 5rem;
  background-color: white;
  width: fit-content;
  font-weight: 900;
  margin-left: 4vw;
  padding: 1vw;
  border: 1rem solid #E9C898;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :hover{
    cursor: pointer;
  }
`;

const Slots = styled.div`
    background-image: url(${slotsplace});
    background-size: 80%;
    margin-left: 5vw;
    margin-top: 3vw;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100%;
    height: 40vw;
    position: relative;
    top: 0;
    /* background-image: url(${(props) => props.imageCall}) */
`;

const Sections = (handleClick) => {
  return (
    <>
      <Columns>
        <TVColumn>
          <TV/>
        </TVColumn>
        <ArticleColumn>
            <Title onClick={handleClick}>Click Here!</Title>
            <Slots trigger={handleClick} imageCall={Math.random() * 10}></Slots>
        </ArticleColumn>
      </Columns>
    </>
  );
};

export default Sections;
