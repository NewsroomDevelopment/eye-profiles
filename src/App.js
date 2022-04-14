import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";
import Landing from "./containers/Landing";
import Sections from "./containers/Sections";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Landing />
      <Sections />
    </ThemeProvider>
  );
}

export default App;
