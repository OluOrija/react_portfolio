// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      marginBottom: '20px',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: '20px',
        },
      },
    },
  },
});

export default theme;
