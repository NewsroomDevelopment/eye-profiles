import React from "react";
import styled from "styled-components";
import { device } from "../device";

const LetterSection = styled.div`
  margin-top: 2vw;
  margin-left: 8vw;
  margin-right: 8vw;
`;

const Text = styled.div`
  font-size: 20px;
  font-family: 'Playfair Display';
  background-color: #C0E4DE;
  font-weight: 100;
  padding: 1vw;
  @media ${device.mobile} {
    padding: 3vw;
    font-size: 16px;
  }
`;
const Letter = () => {
  return (
    <LetterSection>
      <Text>
        <p>Dear readers,</p>
        <p>
          Human stories are the very core of what we do here at The Eye. They drive us. Our goal as a family of writers and eclectic humans is to wade past the pleasantries of “What’s your major?” and “Where are you from?” in search of the hidden idiosyncrasies that are the stuff of late-night, meaning-of-life conversations between close friends.
          {" "}
        </p>
        <p>
          After a brief hiatus, The Eye is back, and we look forward to once again serving the Columbia community through narrative journalism. As a fresh group of editors, we wanted to find a way to revitalize our beloved magazine while maintaining its longstanding commitment to the pursuit of stories that might otherwise slip through the headlines. With our current group of trainees, we aimed to do two things in particular: encourage them to establish their own voices and teach them that everyone has a story to tell, if only you can find it.{" "}
        </p>
        <p>
        Our process was simple: assign each of our nine trainees randomly-generated UNIs sourced from the Columbia directory and tell them, “Go for it!” Each of them sat down with their subject informally to begin to understand them as a human being and again on the record to unearth the story. They poked and prodded at the banal until they found the beautiful.{" "}
        </p>
        <p>
        Once our trainees were armed with interviews and research, ready to write, we ended up wondering: Should we use first or last names? Last would be more in line with typical journalistic convention, a sign of respect and formality assigned to the subject. But, in the end we decided that first names fit the heart of the issue. It showed the randomly selected subjects’ exceptionality, affability, and, above all, their humanity.
{" "}
        </p>
        <p>
        We hope you enjoy what we’ve come up with. Who knows? In this issue, between Raquel Rocha Turner’s tarot cards and Tycho Bogdanowitsch’s rocket ships, between the superheroes that fly around Maad Da Visionary’s imagination and the fireplace in Katelyn Lam’s dorm decorated with letters written in Thai, you might find something that speaks to you.
{" "}
        </p>
        <p>
          With love, <br />
          <p>
          Annie Cheng, Derek Ng, Lilienne Shore Kilgore-Brown, Megan Lunny, and Isabella Aldrete<br />
            The editors at The Eye<br />
          </p>
        </p>
      </Text>
    </LetterSection>
  );
};

export default Letter;
