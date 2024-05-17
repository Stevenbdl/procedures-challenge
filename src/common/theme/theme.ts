import { createTheme, styled } from "@mui/material";
import { MaterialDesignContent } from "notistack";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: '1px solid #D6D6EB',
          backgroundColor: '#FFFFFF',
          color: '#6E6D8C'
        },
        root: {
          textTransform: 'none',
          fontSize: '12px',
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          padding: '8px 25px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '5px',
          height: "30px"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          border: '1px solid #9CBEB3',
          background: '#F6F6FB',
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#3F48AD'
    },
    success: {
      main: '#07B284'
    }
  },
});

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "#306495",
  },
}));