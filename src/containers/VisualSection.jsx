import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import NormalArticle from "../components/NormalArticle";

import BigArticle from "../components/BigArticle";
import useWindowDimensions from "../components/windowDimensions";

const VisualSection = ({ title, articles, linePosition }) => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a id={title} style={{ "text-decoration": "none" }}>
        <SectionTitle id={title} title={title} linePosition={linePosition} />{" "}
      </a>
      {articles.map((article) =>
        width > 768 ? (
          <BigArticle article={article} />
        ) : (
          <NormalArticle article={article} />
        )
      )}
    </>
  );
};

export default VisualSection;
