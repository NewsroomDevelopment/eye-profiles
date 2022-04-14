import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";
import Landing from "./containers/Landing";
import Sections from "./containers/Sections";
import Slots from "./containers/Slots"

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Landing />
      <Slots/>
      <Sections />
    </ThemeProvider>
  );
}

export default App;
