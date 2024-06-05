import ReactDOM from 'react-dom/client';
import React, { useState, useMemo, createContext } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cards } from './pages/cards/cards';
import { Form } from './pages/form/form';
import { Table } from './pages/table/table';
import { FormControlLabel, PaletteMode, Paper, Switch, createTheme } from '@mui/material';
import { styles } from './styles';
import { Navigation } from './components/navigation/navigation';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  // how to use theme in components
  // const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);

  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Paper sx={styles.wrapper}>
              <Navigation />

              <FormControlLabel
                control={<Switch checked={theme.palette.mode === 'dark'} onChange={colorMode.toggleColorMode} />}
                label="Темная тема"
              />

              <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/form" element={<Form />} />
                <Route path="/table" element={<Table />} />
                <Route path="*" element={<Cards />} />
              </Routes>
            </Paper>
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>
    </ColorModeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
