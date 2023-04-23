import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Home from "./Routes/Home";
import { darkTheme, lightTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
