import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
// import {
//   getProfileData,
//   // getProfileError, getProfileIsLoading, getProfileReadonly,
// } from '../../model/selectors';

import s from './profileCard.module.scss';

interface profileCardProps {
  className?: string;
  data?: Profile;
  readOnly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<profileCardProps> = (props) => {
  const {
    className,
    data,
    readOnly = true,
    onChangeFirstName,
    onChangeLastName,
    onChangeUsername,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [s.editing]: !readOnly,
  };

  return (
    // <div className={classNames([s.profileCard, className], mods)}>
    <VStack max gap={16} className={classNames([s.profileCard, className], mods)}>
      <HStack max justify="center">
        <Avatar src={data?.avatar} />
      </HStack>
      <Input
        value={data?.firstName}
        placeholder={t('firstName')}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeFirstName}
      />
      <Input
        value={data?.lastName}
        placeholder={t('lastName')}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeLastName}
      />
      <Input
        value={data?.username}
        placeholder={t('username')}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeUsername}
      />
      <Input
        value={String(data?.age)}
        placeholder={t('age')}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeAge}
      />
      <Input
        value={data?.city}
        placeholder={t('city')}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeCity}
      />
      <Input
        value={data?.avatar}
        placeholder={t('avatar')}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        value={data?.currency}
        label={t('currency')}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeCurrency}
      />
      <CountrySelect
        value={data?.country}
        label={t('country')}
        className={s.input}
        readOnly={readOnly}
        onChange={onChangeCountry}
      />
    </VStack>
    // </div>
  );
};
