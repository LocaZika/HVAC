import "./Assets/Style/style.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import { DefaultLayout } from "./Layouts";

function App() {
  const muiTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          disableGutters: true,
          root: {
            padding: "0 15px !important",
          },
        },
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <DefaultLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
