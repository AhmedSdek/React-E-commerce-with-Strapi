import Header2 from "./Components/header/Header2"
import Header1 from "./Components/header/Header1"
import Header3 from "./Components/header/Header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Components/hero/Hero";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import ScrollTop from "./Components/scroll/ScrollTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.
          // @ts-ignore
          palette.bg.main}>
          <Hero />
          <Main />
        </Box>
        <ScrollTop />
        <Footer />

      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default App
