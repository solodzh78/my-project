import { Profile } from 'entities/Profile';

export type ValidateProfileError =
  'INCORRECT_USER_DATA'
  | 'INCORRECT_AGE'
  | 'INCORRECT_COUNTRY'
  | 'NO_DATA'
  | 'SERVER_ERROR'

export interface ProfileSchema {
  data?: Profile;
  dataEdit?: Profile;
  isLoading: boolean;
  readOnly: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[]
}
