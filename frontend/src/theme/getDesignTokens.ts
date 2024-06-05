import { grey, pink, teal } from '@mui/material/colors';

export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // 👇 palette values for light mode
          primary: { main: pink[100] },
          text: {
            primary: grey[900],
          },
        }
      : {
          // 👇 palette values for dark mode
          primary: { main: teal[700] },
          text: {
            primary: '#fff',
          },
        }),
  },
});
