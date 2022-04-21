import React, { useState } from "react";
import styled from "styled-components";
import TV from "../components/TV";
import TVMobile from "../components/TVMobile"
import { device } from "../device";
import slotsplace from "../images/slotsplace.png";
import { Desktop, MobileAndTablet } from "react-responsive-simple";
import options from "../data/slots.json";


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

const Title = styled.button`
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

const MobileTitle = styled.div`
  text-align: center;
  font-size: 2rem;
  background-color: white;
  width: fit-content;
  font-weight: 900;
  padding: 1vw;
  border: 0.5rem solid #E9C898;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 29%;

  :hover{
    cursor: pointer;
  }
`;

const Slots = styled.div`
    // background-image: url(${slotsplace});
    background-size: 80%;
    margin-left: 5vw;
    margin-top: 3vw;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100%;
    height: 40vw;
    position: relative;
    top: 0;
    background-image: url(${(props) => props.imageNum == null ? slotsplace : options[props.imageNum]});
`;

const MobileSlots = styled.div`
    // background-image: url(${slotsplace});
    background-size: 80%;
    margin-top: 3vw;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100%;
    height: 120vw;
    margin-left: 10%;
    top: 0;
    background-image: url(${(props) => props.imageNum == null ? slotsplace : options[props.imageNum]});
`;

const Sections = ({ handleClick }) => {
  const [num, setNum] = useState(null);
  function handleRandom(){
    console.log('hi');
    setNum(Math.floor((Math.random() * 10)) + 1);
  }
  console.log(num);
  return (
    <>
      <Desktop>
        <Columns>
          <TVColumn>
            <TV/>
          </TVColumn>
          <ArticleColumn>
              <Title onClick={handleRandom}>Click Here!</Title>
              <Slots imageNum={num} ></Slots>
          </ArticleColumn>
        </Columns>
      </Desktop>
      <MobileAndTablet>
        <TVMobile/> 
        <MobileTitle onClick={handleRandom}>Click Here!</MobileTitle>
        <MobileSlots imageNum={num} ></MobileSlots>
      </MobileAndTablet>
    </>
  );
};

export default Sections;
