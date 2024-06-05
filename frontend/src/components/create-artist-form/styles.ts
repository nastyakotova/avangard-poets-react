import { outlinedInputClasses } from '@mui/material';
import { grey } from '@mui/material/colors';

export const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: grey[200],
    margin: '16px',
    padding: '16px',
    borderRadius: '8px',
  },

  row: {
    display: 'flex',
    gap: '16px',
    width: '100%',
    justifyContent: 'space-between',
  },

  field: {
    // TODO: брать цвет из темы
    backgroundColor: grey[50],
    width: '100%',

    // TODO: доработать стили поля ввода
    [`& .${outlinedInputClasses.root}`]: {
      borderRadius: '8px',
    },
  },

  buttonsWrapper: {},
  button: {},
};
