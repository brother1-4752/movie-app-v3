import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atoms";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import Home from "./Routes/Home";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
