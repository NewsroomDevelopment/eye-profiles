import React, { useState } from "react";
import styled from "styled-components";
import TV from "../components/TV";
import TVMobile from "../components/TVMobile"
import { device } from "../device";
import slotsplace from "../images/slotspace.gif";
import { Desktop, MobileAndTablet } from "react-responsive-simple";
import options from "../data/slots.json";
import WritingData from "../utils/WritingData";


const Columns = styled.div`
  display: flex;
  width: 100%;
`;

const TVColumn = styled.div`
  width: 50%;
  @media ${device.mobile} {
    width:0;
  }
`;

const ArticleColumn = styled.div`
  width: 50%;
  padding-left: 5vw;
  padding-right: 2vw;
  @media ${device.mobile} {
    width:100%;
    padding-right:0%;
  }
`;

const Title = styled.div`
  text-align: center;
  font-family: 'Playfair Display';
  font-size: 1.8rem;
  background-color: #9ACABD;
  width: 70%;
  font-weight: 900;
  margin-left: 4vw;
  padding: 1vw;
  border: 1rem solid #AADBCE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
`;

const MobileTitle = styled.div`
  text-align: center;
  font-family: 'Playfair Display';
  font-size: 2rem;
  background-color: #9ACABD;
  width: 70%;
  font-weight: 900;
  padding: 2vw;
  border: 1rem solid #AADBCE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 11vw;
  color: white;
  margin-bottom: 8vw;
`;

const Slots = styled.div`
    background-size: 80%;
    margin-left: 5vw;
    margin-bottom: 2vw;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100%;
    height: 35vw;
    position: relative;
    top: 0;
    background-image: url(${(props) => props.imageNum == 0 ? slotsplace : WritingData['data'][props.imageNum].slots});
    :hover{
      cursor: pointer;
    }
`;

const MobileSlots = styled.div`
    background-size: 80%;
    margin-top: 3vw;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100%;
    height: 80vw;
    margin-left: 10%;
    top: 0;
    background-image: url(${(props) => props.imageNum == 0 ? slotsplace : WritingData['data'][props.imageNum].slots});
    :hover{
      cursor: pointer;
    }
    `;

const Sections = ({ handleClick }) => {
  const [num, setNum] = useState(0);
  function handleRandom(){
    console.log('hi');
    var tmp = Math.floor((Math.random() * WritingData['data'].length)) + 1;
    if(tmp > WritingData['data'].length -1){
      tmp = WritingData['data'].length-1;
    }
    setNum(tmp);
  }
  console.log(num);
  console.log(WritingData['data'][num]);
  return (
    <>
      <Desktop>
        <Columns>
        <ArticleColumn>
            <Slots onClick={handleRandom} imageNum={num} ></Slots>
            <Title>Click the slot machine!</Title>
          </ArticleColumn>
          <TVColumn>
            <TV article={WritingData['data'][num]}/>
          </TVColumn>
        </Columns>
      </Desktop>
      <MobileAndTablet>
        <MobileSlots onClick={handleRandom} imageNum={num}></MobileSlots>
        <MobileTitle>Click the slot machine!</MobileTitle>
        <TVMobile article={WritingData['data'][num]} /> 
      </MobileAndTablet>
    </>
  );
};

export default Sections;
