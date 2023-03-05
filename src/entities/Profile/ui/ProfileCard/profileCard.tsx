import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text/Text';
import {
  getProfileData,
  // getProfileError, getProfileIsLoading, getProfileReadonly,
} from '../../model/selectors';

import s from './profileCard.module.scss';

interface profileCardProps {
  className?: string;
}

export const ProfileCard: FC<profileCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  // const readonly = useSelector(getProfileReadonly);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames([s.profileCard, className])}>
      <div className={s.header}>
        <Text title={t('card_title')} />
        <Button className={s.editBtn} theme="outline">
          {t('edit')}
        </Button>
      </div>
      <div className={s.data}>
        <Input
          value={data?.firstName}
          placeholder={t('firstName')}
          className={s.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('lastName')}
          className={s.input}
        />
      </div>
    </div>
  );
};
