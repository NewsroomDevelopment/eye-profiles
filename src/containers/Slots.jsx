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
  border-bottom: 10px solid #784A3C;
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
  font-family: 'Playfair Display';
  font-size: 5rem;
  background-color: #DF948F;
  width: 70%;
  font-weight: 900;
  margin-left: 4vw;
  padding: 1vw;
  border: 1rem solid #DBADAA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  :hover{
    cursor: pointer;
  }
`;

const MobileTitle = styled.div`
  text-align: center;
  font-family: 'Playfair Display';
  font-size: 2rem;
  background-color: #DF948F;
  width: 70%;
  font-weight: 900;
  padding: 2vw;
  border: 0.5rem solid #DBADAA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 5vw;
  margin-left: 11vw;
  color: white;
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
              <Title onClick={handleRandom}>Click Me!</Title>
              <Slots imageNum={num} ></Slots>
          </ArticleColumn>
        </Columns>
      </Desktop>
      <MobileAndTablet>
        <TVMobile/> 
        <MobileTitle onClick={handleRandom}>Click Me!</MobileTitle>
        <MobileSlots imageNum={num} ></MobileSlots>
      </MobileAndTablet>
    </>
  );
};

export default Sections;
