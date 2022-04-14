import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import Article from "../components/Article"


const WritingSection = ({ title, articles, linePosition }) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a id={title} style={{ "text-decoration": "none" }}>
        <SectionTitle title={title} linePosition={linePosition} />
      </a>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </>
  );
};

export default WritingSection;
