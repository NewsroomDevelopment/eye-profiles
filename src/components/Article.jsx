import React from "react";
import styled from "styled-components";
import NormalArticle from "./NormalArticle";
import SideArticle from "./SideArticle";
import useWindowDimensions from "./windowDimensions";
const Article = ({ article }) => {
  const { height, width } = useWindowDimensions();

  if (width > "768") {
    if (article.type === "normal") {
      return <NormalArticle article={article} />;
    } else if (article.type === "left") {
      return <SideArticle article={article} left={true} />;
    } else {
      return <SideArticle article={article} left={false} />;
    }
  }
  return <NormalArticle article={article} />;
};
export default Article;
