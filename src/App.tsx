import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atoms";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
