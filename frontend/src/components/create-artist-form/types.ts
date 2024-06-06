import { FormikProps } from 'formik';

export interface IBaseForm {
  lastName: string;
  firstName: string;
  patronymic: string;
  birthDate: string;
  birthPlace: string | null;
  deathDate: string;
  deathPlace: string | null;
  artMovements: Array<string>;
  otherInfo: string;
  wikiUrl: string;
}

export type IBaseFormProps = FormikProps<IBaseForm>;

export type Props = {};
