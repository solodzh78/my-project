import { ProfileCard } from 'entities/Profile';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader';
import { Text } from 'shared/ui/Text/Text';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../model/types/profile';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import {
  getProfileReadOnly,
  getProfileError,
  getProfileIsLoading,
  getProfileData,
  getProfileValidateErrors,
} from '../../model/selectors';
import { EditableProfileHeader } from '../EditableProfileHeader/EditableProfileHeader';

import s from './EditableProfileCard.module.scss';

interface editableProfileCardProps {
  className?: string;
}

export const EditableProfileCard: FC<editableProfileCardProps> = (props) => {
  const {
    className,
  } = props;
  const data = useSelector(getProfileData);
  const readOnly = Boolean(useSelector(getProfileReadOnly));
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const validateErrorsTranslates = useMemo<Record<ValidateProfileError, string>>(() => ({
    SERVER_ERROR: t('SERVER_ERROR'),
    NO_DATA: t('NO_DATA'),
    INCORRECT_USER_DATA: t('INCORRECT_USER_DATA'),
    INCORRECT_AGE: t('INCORRECT_AGE'),
    INCORRECT_COUNTRY: t('INCORRECT_COUNTRY'),
  }), [t]);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);
  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  // onChange handlers
  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstName: value }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastName: value }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value: string) => {
    const validatedValue = value.replace(/\D+/gm, '');
    dispatch(profileActions.updateProfile({ age: Number(validatedValue || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={s.isLoading}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.error}>
        <Text
          title={t('error_title')}
          text={t('error_message')}
          align="center"
          variant="error"
        />
      </div>
    );
  }

  return (
    <>
      <EditableProfileHeader
        onEdit={onEdit}
        onCancel={onCancel}
        onSave={onSave}
        readOnly={readOnly}
      />
      {validateErrors?.length && validateErrors.map((error) => (
        <Text text={validateErrorsTranslates[error]} key={error} variant="error" />
      ))}
      <ProfileCard
        className={className}
        data={data}
        readOnly={readOnly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeUsername={onChangeUsername}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </>
  );
};
