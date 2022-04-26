import React from "react";
import styled from "styled-components";

import { device } from "../device";

const ArticleWrap = styled.div`
  width: 40vw;
  height: 35vw;
  margin-top: 20%;
  background:#9ACABD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  text-align: center;
  @media ${device.mobile} {
    width: 70vw;
    height: 90vw;
    margin-bottom: 10vw;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  left: 5%;
  background: #FFFFFF;
  text-align: center;
`

const ArticleText = styled.p`
  text-align: center;
  align-items: center;
  position: absolute;
  text-align: center;
  margin-left: 1vw;
  margin-right: 1vw;
  line-height: 1vw;
`
const Title = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vw;
  color: #313131;
  padding-bottom: 0.2vw;
  @media ${device.mobile} {
    font-size: 4vw;
    line-height: 3vw;
  }

`
const Author = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-size: 0.8vw;
  color: #313131;
  @media ${device.mobile} {
    font-size: 2vw;
    line-height: 2vw;
  }
`;

const Section = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-size: 1vw;
  font-weight: 700;
  color: #313131;
  @media ${device.mobile} {
    font-size: 2.5vw;
    line-height: 2.5vw;
  }
`;

const Credits = ({ article }) => {
    return (
        <ArticleWrap color={article.color}>
            <Wrap>
                <ArticleText>
                    <Title>Credits</Title>
                    <Section>
                        Eye Trainee Class, Spring 2022
                    </Section>
                    <Author>
                        Caelan Bailey,
                        Mason Cannon,
                        Sadie Ellis-Caleo,
                        Mayra Kalaora,
                        Isabella Noonen,
                        Haleigh Stewart,
                        Ysabella Titi,
                        Jonathan Truong,
                        Ann Vettikkal
                    </Author>
                    <Section>
                        Eye Editors</Section>
                    <Author>
                        Annie Cheng,
                        Derek Ng,
                        Lilienne Shore Kilgore-Brown,
                        Megan Lunny,
                        Isabella Aldrete
                    </Author>
                    <Section>
                        Illustrations
                    </Section>
                    <Author>
                        Melody Lu,
                        Liza Evseeva
                    </Author>
                    <Section>
                        Photos
                    </Section>
                    <Author>
                        Caitlin Buckley,
                        Soleil Guevara,
                        Princeton Huang,
                        Ella Jacobs,
                        Gabi Levy,
                        Jane Mok
                    </Author>
                    <Section>
                        Newsroom Development
                    </Section>
                    <Author>
                        Victoria Geh,
                        Evan Li,
                        Patrick Puma
                    </Author>
                    <Section>
                        Product Design
                    </Section>
                    <Author>
                        Philippe Wu,
                        Elaine Su
                    </Author>
                </ArticleText>
            </Wrap>
        </ArticleWrap>
    );
};

export default Credits;