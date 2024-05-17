import { ThemeProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import "./App.css";
import { StyledMaterialDesignContent, theme } from "./common/theme/theme";
import { Procedures } from "./components/Pages/Procedure/Procedure";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        autoHideDuration={2500}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        Components={{
          success: StyledMaterialDesignContent,
        }}
        hideIconVariant
      >
        <Procedures />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
