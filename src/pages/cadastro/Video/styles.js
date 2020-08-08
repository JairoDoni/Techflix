import {
  makeStyles, createMuiTheme,
} from '@material-ui/core';

const useStyles = makeStyles({
  dialog: {
    display: 'flex',
    background: '#071107',
    color: '#B7DFB9',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',

  },

  buttons: {
    width: '100%',
    height: '100%',
    maxWidth: '600px',
    maxHeight: '60px',
  },
  button: {
    background: '#4CAF50',
    width: '50%',
    height: '100%',
    margin: '0 auto',
    border: '2px solid #B7DFB9',

  },
  close: {
    zIndex: '100',
    margin: '10px',
    padding: 0,
    background: '#071107',
    color: '#B7DFB9',
    position: 'fixed',
    right: 0,
  },
  icons: {
    marginBottom: '10px',
    fontSize: '100px',
  },
  alertError: {
    marginBottom: '16px',
  },
});

// Controla a paleta de cores e cores padrão do "Material UI"
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#dc1a28',
    },
    secondary: {
      main: '#f5f5f5',
    },

  },
});
export default {
  useStyles,
  theme,
};
