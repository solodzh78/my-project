import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/Page/Page';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames([s.notFoundPage, className])}>
      { t('Страница не найдена')}
    </Page>
  );
};
