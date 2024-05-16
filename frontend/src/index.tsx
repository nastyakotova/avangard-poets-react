import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from './components';
import { theme } from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cards } from './pages/cards/cards';
import { Form } from './pages/form/form';
import { Table } from './pages/table/table';
import { Navigation } from './components/navigation/navigation';

const App = () => {
  return <Button title="LeraSuper" flag={true} />;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <App />

    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);
