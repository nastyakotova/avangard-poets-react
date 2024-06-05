import React, { FC } from 'react';
import { Autocomplete, Box, Button, Checkbox, TextField } from '@mui/material';
import { IBaseForm, IBaseFormProps, Props } from './types';
import { styles } from './styles';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { dictionary } from './dictionary';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: 'Суприматизм', year: 1994 },
  { title: 'Абстракционизм', year: 1972 },
  { title: 'Футуризм', year: 1974 },
  { title: 'Кубизм', year: 2008 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];

export const CreateArtistForm: FC<Props> = (): React.ReactElement => {
  const baseForm: IBaseFormProps = useFormik<IBaseForm>({
    initialValues: {
      surname: '',
      name: '',
      midName: '',
      birthDate: '',
      birthPlace: '',
      deathDate: '',
      deathPlace: '',
      direction: '',
      otherInfo: '',
      wikiUrl: '',
    },
    validationSchema,
    onSubmit: () => {},
  });

  // TODO: добавить поля для ввода даты
  // TODO: добавить поле для поиска направлений (с чекбоксами)
  // TODO: уменьшить размер полей для ввода даты
  // TODO: добавить кнопку для отправки формы
  // TODO: реализовать отправку данный в запрос

  return (
    <Box component="form" sx={styles.form} autoComplete="off">
      <Box sx={styles.row}>
        <TextField
          name="surname"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.surname}
          error={baseForm.touched.surname && !!baseForm.errors.surname}
          label={dictionary.surname}
          helperText={baseForm.touched.surname && baseForm.errors.surname}
          sx={styles.field}
        />

        <TextField
          name="name"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.name}
          error={baseForm.touched.name && !!baseForm.errors.name}
          label={dictionary.name}
          helperText={baseForm.touched.name && baseForm.errors.name}
          sx={styles.field}
        />

        <TextField
          name="midName"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.midName}
          error={baseForm.touched.midName && !!baseForm.errors.midName}
          label={dictionary.midName}
          helperText={baseForm.touched.midName && baseForm.errors.midName}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.row}>
        <DatePicker
          name="birthDate"
          // variant="outlined"
          onChange={(newDate) => {
            baseForm.setFieldValue('birthDate', newDate);
          }}
          value={dayjs(baseForm.values.birthDate)}
          // error={baseForm.touched.birthDate && !!baseForm.errors.birthDate}
          label={dictionary.birthDate}
          // helperText={baseForm.touched.birthDate && baseForm.errors.birthDate}
          sx={styles.field}
        />

        <TextField
          name="birthPlace"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.birthPlace}
          error={baseForm.touched.birthPlace && !!baseForm.errors.birthPlace}
          label={dictionary.birthPlace}
          helperText={baseForm.touched.birthPlace && baseForm.errors.birthPlace}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.row}>
        <DatePicker
          name="deathDate"
          // variant="outlined"
          onChange={(newDate) => {
            baseForm.setFieldValue('deathDate', newDate);
          }}
          value={dayjs(baseForm.values.deathDate) || null}
          // error={baseForm.touched.deathDate && !!baseForm.errors.deathDate}
          label={dictionary.deathDate}
          // helperText={baseForm.touched.deathDate && baseForm.errors.deathDate}
          sx={styles.field}
        />

        <TextField
          name="deathPlace"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.deathPlace}
          error={baseForm.touched.deathPlace && !!baseForm.errors.deathPlace}
          label={dictionary.deathPlace}
          helperText={baseForm.touched.deathPlace && baseForm.errors.deathPlace}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.row}>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          // sx={styles.autocomplete}
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li key={option.title} {...props}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
              {option.title}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              name="direction"
              variant="outlined"
              {...params}
              // onChange={baseForm.handleChange}
              // value={baseForm.values.direction}
              // error={baseForm.touched.direction && !!baseForm.errors.direction}
              label={dictionary.direction}
              // helperText={baseForm.touched.direction && baseForm.errors.direction}
              // rows={4}
              // multiline
            />
          )}
        />
      </Box>

      <Box sx={styles.row}>
        <TextField
          name="otherInfo"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.otherInfo}
          error={baseForm.touched.otherInfo && !!baseForm.errors.otherInfo}
          label={dictionary.otherInfo}
          helperText={baseForm.touched.otherInfo && baseForm.errors.otherInfo}
          sx={styles.field}
          rows={4}
          multiline
        />
      </Box>

      <Box sx={styles.row}>
        <TextField
          name="wikiUrl"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.wikiUrl}
          error={baseForm.touched.wikiUrl && !!baseForm.errors.wikiUrl}
          label={dictionary.wikiUrl}
          helperText={baseForm.touched.wikiUrl && baseForm.errors.wikiUrl}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.buttonsWrapper}>
        <Button variant="outlined" sx={styles.button}>
          {dictionary.reset}
        </Button>
        <Button variant="contained" sx={styles.button}>
          {dictionary.save}
        </Button>
      </Box>
    </Box>
  );
};
