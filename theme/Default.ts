import { createMuiTheme } from '@material-ui/core';

export enum Colors {
  PRIMARY = '#303f9f',
  SECONDARY = '#ef6461',
  ACCENT = '#8c9eff',
  TEXT = '#e8eaf6'
}

export const defaultTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#666ad1',
      main: '#303f9f',
      dark: '#001970',
      contrastText: '#f7f7ff'
    },
    secondary: {
      light: '#c0cfff',
      main: '#8c9eff',
      dark: '#5870cb',
      contrastText: '#f7f7ff'
    },
    background: {
      default: '#303f9f',
      paper: '#e8eaf6'
    }
  }
});
