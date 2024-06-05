import { FormikProps } from 'formik';

export interface IBaseForm {
  surname: string;
  name: string;
  midName: string;
  birthDate: string;
  birthPlace: string | null;
  deathDate: string;
  deathPlace: string | null;
  direction: string;
  otherInfo: string;
  wikiUrl: string;
}

export type IBaseFormProps = FormikProps<IBaseForm>;

export type Props = {};
