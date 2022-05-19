import { createTheme } from '@mui/material/styles';
import background from '../../public/images/background.png';

// Create a theme instance.
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#556cd6',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  // },

  palette: {
    mode: 'dark',

    // gray: "#b2bac2",

    background: {
      default: '#1b1f2a',
    },
  },
});

export default theme;
