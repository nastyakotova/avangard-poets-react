import { Box, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { styles } from './styles';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link: string): void => {
    navigate(link);
  };

  // TODO: вынести маршруты в константы
  // TODO: написать функцию для определения варианта отображения кнопки, вынести в utils
  // TODO: добавить индекс файл для упрощения импорта
  // TODO: вынести стили в отдельный файл styles
  // TODO: типизировать компонент
  // TODO: заменить div на Box из mui
  // TODO: вынести текстовки "Cards", "Form", "Table" в файл dictionary

  return (
    <Box sx={styles.wrapper}>
      <Button onClick={() => handleClick('/')} variant={location.pathname === '/' ? 'contained' : 'outlined'}>
        Список художников
      </Button>

      <Button onClick={() => handleClick('/form')} variant={location.pathname === '/form' ? 'contained' : 'outlined'}>
        добавить
      </Button>

      <Button onClick={() => handleClick('/table')} variant={location.pathname === '/table' ? 'contained' : 'outlined'}>
        Table
      </Button>
    </Box>
  );
};
