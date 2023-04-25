import styled, { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import Home from "./Routes/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const setIsDark = useSetRecoilState(isDarkAtom);
  const AppBtn = styled.button``;
  const handleMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Home />
        <AppBtn onClick={handleMode}>
          {isDark ? "라이트모드" : "다크모드"}
        </AppBtn>
        <div>zzzzz</div>
        <FontAwesomeIcon icon={faBars} />
        {/* <FontAwesomeIcon
          className="header__search--icon"
          icon={solid("magnifying-glass")}
        /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
