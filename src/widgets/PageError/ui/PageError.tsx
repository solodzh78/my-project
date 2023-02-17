import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

import s from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames([s.pageerror, className])}>
      <p>
        {t('Что-то пошло не так')}
      </p>
      <Button onClick={onReload}>
        {t('Перезагрузить')}
      </Button>
    </div>
  );
};
