import React from "react";
import styled from "styled-components";
import CreditsImg from "../images/credits.png";
import { device } from "../device";

const CreditsSection = styled.div`
  background-image: url(${CreditsImg});
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media ${device.mobile} {
    h2 {
      font-size: 2rem;
    }
  }
`;

const CreditsTitle = styled.div`
  text-align: center;
  color: white;
  position: relative;
  top: 20%;
  padding-top: 7%;
  font-size: 5rem;

  @media ${device.mobile} {
    padding-top: 50%;
  }
`;

const Body = styled.div`
  h1 {
    text-align: center;
    color: white;
  }
  margin-top: 5%;

  @media ${device.mobile} {
    padding-left: 5%;
  }
`;

const SubDiv = styled.div`
  width: 75vw;
  width: fit-content;

  color: white;
  @media ${device.mobile} {
    width: 100vw;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-size: 0.8em;
  justify-content: center;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    font-size: 0.75em;
  }
  @media (max-width: 768px) {
    font-size: 1em !important;
  }
`;

const Credits = () => {
  return (
    <CreditsSection>
      <CreditsTitle>credits</CreditsTitle>
      <Body>
        <Row>
          <SubDiv>
            <div>
              <h2>Corporate Board</h2>
              <p>
                <b>Sarah Braka</b>, Editor in Chief
              </p>
              <p>
                <b>Elizabeth Karpen</b>, Managing Editor
              </p>
              <p>
                <b>Tamarah Wallace</b>, Publisher
              </p>
            </div>
            <div>
              <h2>News</h2>
              <p>
                <b>Dia GIll</b>, News Editor
              </p>
              <p>
                <b>Irie Sentner</b>, Deputy News Editor
              </p>
              <p>
                <b>Stella Pagkas</b>, Staff Writer
              </p>
              <p>
                <b>Isabella Ramirez</b>, Staff Writer
              </p>
              <p>
                <b>Ben Dahan</b>, Staff Writer
              </p>
              <p>
                <b>Esha Karam</b>, Staff Writer
              </p>
              <p>
                <b>Michael von Driska</b>, Staff Writer
              </p>
            </div>
            <div>
              <h2>Opinion</h2>
              <p>
                <b>Ryan Oden</b>, Editorial Page Editor
              </p>
              <p>
                <b>Senem Yurdakul</b>, Deputy Editorial Page Editor
              </p>
              <p>
                <b>Lily Nathanson</b>, Deputy Editorial Page Editor
              </p>
              <p>
                <b>Karlton Gaskin</b>, Deputy Editorial Page Editor
              </p>
              <p>
                <b>Sean Conlon</b>, Senior Associate Editorial Page Editor
              </p>
              <p>
                <b>Eki Uzamere</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Isabella Inouye</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Julina Novarr</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Julien Roa</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Lauren Zhou</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Maria Rice</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Melanie Cheung</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Michaela Fleischer</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Milene Klein</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Ruth Dejene</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Sara Chough</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Sydney Goldson</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Tori Sproat</b>, Associate Editorial Page Editor
              </p>
              <p>
                <b>Celeste Ramirez</b>, Associate Editorial Page Editor
              </p>
            </div>

            <div>
              <h2>Spec Audio</h2>
              <p>
                <b>Samuel Hyman</b>, Executive Editor of the Ear
              </p>
            </div>
            <div>
              <h2>Revenue</h2>
              <p>
                <b>Amanda Teramihardja</b>, Revenue Associate
              </p>
              <p>
                <b>Haru Yamanaka</b>, Revenue Manager
              </p>
              <p>
                <b>Vilanna Wang</b>, Revenue Manager
              </p>
              <p>
                <b>Rachel Forest</b>, Revenue Manager
              </p>
              <p>
                <b>Anushka Thorat</b>, Revenue Manager
              </p>
              <p>
                <b>Suheyla Tozan</b>, Revenue Associate
              </p>
              <p>
                <b>Kevin Jiang</b>, Revenue Associate
              </p>
              <p>
                <b>Helen Hung</b>, Revenue Associate
              </p>
              <p>
                <b>Angela Chea</b>, Revenue Associate
              </p>
              <p>
                <b>Jamin Feng</b>, Revenue Associate
              </p>
              <p>
                <b>Tyler Shern</b>, Revenue Associate
              </p>
              <p>
                <b>Kris Packauskas</b>, Revenue Associate
              </p>
              <p>
                <b>Lisa Cardoso</b>, Revenue Associate
              </p>
              <p>
                <b>Ece Hasdemir</b>, Revenue Associate
              </p>
              <p>
                <b>Ian Civiletti</b>, Revenue Associate
              </p>
              <p>
                <b>Mike Kim</b>, Revenue Associate
              </p>
              <p>
                <b>April Lin</b>, Revenue Associate
              </p>
            </div>
          </SubDiv>
          <SubDiv>
            <div>
              <h2>Design and Development</h2>
              <p>
                <b>Hong Sen Du</b>, Head of Newsroom Development
              </p>
              <p>
                <b>Evan Li</b>, Deputy Newsroom Developer
              </p>
              <p>
                <b>Cindy Espinosa</b>, Head of Product
              </p>
              <p>
                <b>Sagarika Sharma</b>, Product Manager
              </p>
              <p>
                <b>Ray Banke</b>, Lead Product Designer
              </p>
              <p>
                <b>Caroline Mao</b>, Product Designer
              </p>
            </div>
            <div>
              <h2>Graphics</h2>
              <p>
                <b>Jessica Li</b>, Graphics Editor
              </p>
              <p>
                <b>Eleanor Lin</b>, Graphics associate
              </p>
              <p>
                <b>Amanda Cassel</b>, Graphics associate
              </p>
              <p>
                <b>Andrada Nicolae</b>, Graphics associate
              </p>
            </div>
            <div>
              <h2>Spectrum</h2>
              <p>
                <b>Ariana Novo</b>, Spectrum Editor
              </p>
              <p>
                <b>Swethaa Suresh</b>, Deputy Spectrum Editor
              </p>
              <p>
                <b>Haley Long</b>, Deputy Spectrum Editor
              </p>
              <p>
                <b>Aliza Rabinovitz</b>, Deputy Spectrum Editor
              </p>
              <p>
                <b>Emma Cho</b>, Deputy Spectrum Editor
              </p>
              <p>
                <b>Caroline Somers</b>, Staff Writer
              </p>
              <p>
                <b>Kenza Chraibi</b>, Staff Writer
              </p>
              <p>
                <b>Nour Kandil</b>, Staff Writer
              </p>
              <p>
                <b>Charlotte Wu</b>, Staff Writer
              </p>
              <p>
                <b>Fatma AlAryani</b>, Staff Writer
              </p>
              <p>
                <b>Kylie Gall</b>, Staff Writer
              </p>
              <p>
                <b>Rose O’Brien</b>, Staff Writer
              </p>
            </div>
            <div>
              <h2>Photo</h2>
              <p>
                <b>Beatrice Shlansky</b>, Photo Editor
              </p>
              <p>
                <b>Millie Felder</b>, Deputy Photo Editor
              </p>
              <p>
                <b>Samantha Camacho</b>, Deputy Photo Editor
              </p>
              <p>
                <b>Kate Della Pietra</b>, Deputy Photo Editor
              </p>
              <p>
                <b>Rommel Nunez</b>, Deputy Photo Editor
              </p>
              <p>
                <b>Elisabeth McLaughlin</b>, Deputy Photo Editor
              </p>
              <p>
                <b>Aliya Schneider</b>, Senior Staff Photographer
              </p>
              <p>
                <b>Gabi Levy</b>, Staff Photographer
              </p>
              <p>
                <b>Caitlin Buckley</b>, Staff Photographer
              </p>
              <p>
                <b>Princeton Huang</b>, Staff Photographer
              </p>
              <p>
                <b>Shannon Binns</b>, Staff Photographer
              </p>
              <p>
                <b>Kat St. Martin</b>, Staff Photographer
              </p>
              <p>
                <b>Annie Son</b>, Staff Photographer
              </p>
            </div>
            <div>
              <h2>Arts and Entertainment</h2>
              <p>
                <b>Noah Sheidlower</b>, A&E Editor
              </p>
              <p>
                <b>Katie Levine</b>, A&E Deputy Editor
              </p>
              <p>
                <b>Olivia Doyle</b>, A&E Deputy Editor
              </p>
              <p>
                <b>Bella Druckman</b>, A&E Deputy Editor
              </p>
              <p>
                <b>Sophie Craig</b>, A&E Deputy Editor
              </p>
              <p>
                <b>Isabella Farfan</b>, A&E Staff Writer
              </p>
              <p>
                <b>Daniela Miranda</b>, A&E Staff Writer
              </p>
              <p>
                <b>Jane Loughman</b>, A&E Staff Writer
              </p>
              <p>
                <b>Clare Donaldson</b>, A&E Staff Writer
              </p>
              <p>
                <b>Emma Danon</b>, A&E Staff Writer
              </p>
              <p>
                <b>Liz Radway</b>, A&E Staff Writer
              </p>
              <p>
                <b>Julia Tong</b>, A&E Staff Writer
              </p>
              <p>
                <b>Emily Chen</b>, A&E Staff Writer
              </p>
            </div>
          </SubDiv>
          <SubDiv>
            <div>
              <h2>Lead Illustration By</h2>
              <p>
                <b>Taylor Yingshi</b>, Staff Illustrator{" "}
              </p>
            </div>
            <div>
              <h2>Illustrations</h2>
              <p>
                <b>Brenda Huang</b>, Illustrations Editor{" "}
              </p>
              <p>
                <b>Yingjie Wang</b>, Deputy Illustrations Editor{" "}
              </p>
              <p>
                <b>Liza Evseeva</b>, Deputy Illustrations Editor{" "}
              </p>
              <p>
                <b>Carlos Ochoa</b>, Deputy Illustrations Editor{" "}
              </p>
              <p>
                <b>Ashley Jiao</b>, Deputy Illustrations Editor{" "}
              </p>
              <p>
                <b>Tina Wang</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Katya Reichart</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Magan Chin</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Natalie Tak</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Sadia Sharif</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Marion Kamara</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Tejasri Vijayakumar</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Ji Yoon Sim</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Julian Michaud</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Chiara Guigou</b>, Staff Illustrator{" "}
              </p>
              <p>
                <b>Noelle Hunter</b>, Staff Illustrator{" "}
              </p>
            </div>
            <div>
              <h2>Copy</h2>
              <p>
                <b>Emma Bradbury</b>, Head Copy Editor
              </p>
              <p>
                <b>Kaylene Chong</b>, Deputy Copy Editor
              </p>
              <p>
                <b>Vincenzo DiNatale</b>, Deputy Copy Editor
              </p>
              <p>
                <b>Mabry Griffin</b>, Deputy Copy Editor
              </p>
              <p>
                <b>Harry Shi</b>, Deputy Copy Editor
              </p>
              <p>
                <b>Robyn Fohouo</b>, Deputy Copy Editor
              </p>
              <p>
                <b>Olivia Vella</b>, Deputy Copy Editor
              </p>
              <p>
                <b>Renuka Balakrishnan</b>, Associate Copy Editor
              </p>
              <p>
                <b>Sam Barnett</b>, Associate Copy Editor
              </p>
              <p>
                <b>Rachel Borshchenko</b>, Associate Copy Editor
              </p>
              <p>
                <b>Katherine Carraway</b>, Associate Copy Editor
              </p>
              <p>
                <b>Alia Derriey</b>, Associate Copy Editor
              </p>
              <p>
                <b>Madison Guzy</b>, Associate Copy Editor
              </p>
              <p>
                <b>Jacob Kang</b>, Associate Copy Editor
              </p>
              <p>
                <b>Maria Levit</b>, Associate Copy Editor
              </p>
              <p>
                <b>Jonah Pitkowsky</b>, Associate Copy Editor
              </p>
              <p>
                <b>Noyna Roy</b>, Associate Copy Editor
              </p>
              <p>
                <b>Leif Wood</b>, Associate Copy Editor
              </p>
              <p>
                <b>Safia Aladlouni</b>, Preslotter
              </p>
              <p>
                <b>Adam Burns</b>, Preslotter
              </p>
              <p>
                <b>Ronit Dhulia</b>, Preslotter
              </p>
              <p>
                <b>Ana Eveleigh</b>, Preslotter
              </p>
              <p>
                <b>Emma Grungold</b>, Preslotter
              </p>
              <p>
                <b>Joyce Liu</b>, Preslotter
              </p>
              <p>
                <b>Willa Nagy</b>, Preslotter
              </p>
              <p>
                <b>Grace O’Malley</b>, Preslotter
              </p>
              <p>
                <b>Maya Platek</b>, Preslotter
              </p>
              <p>
                <b>Sadie Rochman</b>, Preslotter
              </p>
              <p>
                <b>Meera Sahney</b>, Preslotter
              </p>
              <p>
                <b>Yvin Shin</b>, Preslotter
              </p>
              <p>
                <b>Lanah Wyne</b>, Preslotter
              </p>
              <p>
                <b>Natarsha Yan</b>, Preslotter
              </p>
              <p>
                <b>Bonnie Yang</b>, Preslotter
              </p>
            </div>
          </SubDiv>
        </Row>
      </Body>
    </CreditsSection>
  );
};

export default Credits;
