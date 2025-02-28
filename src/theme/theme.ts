import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a3b5d', // Prussian Blue
    },
    secondary: {
      main: '#28a2a2', // Verdigris
    },

    background: {
      default: '#f8f9fa', // Sea Salt
      paper: '#ffffff',
    },
    text: {
      primary: '#2f2f2f', // Jet
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
    },
  },
});

export default theme;
