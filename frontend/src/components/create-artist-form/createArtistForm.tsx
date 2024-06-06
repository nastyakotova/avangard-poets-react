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
import { DATE_FORMAT_DMY } from './constants';

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
      lastName: '',
      firstName: '',
      patronymic: '',
      birthDate: '',
      birthPlace: '',
      deathDate: '',
      deathPlace: '',
      artMovements: [],
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
          name="lastName"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.lastName}
          error={baseForm.touched.lastName && !!baseForm.errors.lastName}
          label={dictionary.lastName}
          helperText={baseForm.touched.lastName && baseForm.errors.lastName}
          sx={styles.field}
        />

        <TextField
          name="firstName"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.firstName}
          error={baseForm.touched.firstName && !!baseForm.errors.firstName}
          label={dictionary.firstName}
          helperText={baseForm.touched.firstName && baseForm.errors.firstName}
          sx={styles.field}
        />

        <TextField
          name="patronymic"
          variant="outlined"
          onChange={baseForm.handleChange}
          value={baseForm.values.patronymic}
          error={baseForm.touched.patronymic && !!baseForm.errors.patronymic}
          label={dictionary.patronymic}
          helperText={baseForm.touched.patronymic && baseForm.errors.patronymic}
          sx={styles.field}
        />
      </Box>

      <Box sx={styles.row}>
        <DatePicker
          sx={styles.field}
          label={dictionary.birthDate}
          format={DATE_FORMAT_DMY}
          value={dayjs(baseForm.values.birthDate) || null}
          onChange={(date) => {
            baseForm.setFieldValue('birthDate', date, true);
          }}
          slotProps={{
            textField: {
              error: Boolean(baseForm.touched.birthDate && baseForm.errors.birthDate),
              helperText: baseForm.touched.birthDate && baseForm.errors.birthDate,
            },
          }}
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
          sx={styles.field}
          label={dictionary.deathDate}
          format={DATE_FORMAT_DMY}
          value={dayjs(baseForm.values.deathDate) || null}
          onChange={(date) => {
            baseForm.setFieldValue('deathDate', date, true);
          }}
          slotProps={{
            textField: {
              error: Boolean(baseForm.touched.deathDate && baseForm.errors.deathDate),
              helperText: baseForm.touched.deathDate && baseForm.errors.deathDate,
            },
          }}
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
              name="artMovements"
              variant="outlined"
              {...params}
              // onChange={baseForm.handleChange}
              // value={baseForm.values.direction}
              // error={baseForm.touched.direction && !!baseForm.errors.direction}
              label={dictionary.artMovements}
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
