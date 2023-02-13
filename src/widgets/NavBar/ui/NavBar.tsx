import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import s from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames([s.navbar, className])}>
      <div className={s.links}>
        <AppLink className={s.mainLink} to="/">{ t('Главная')}</AppLink>
        <AppLink to="/about" theme="secondary">{ t('О сайте')}</AppLink>
      </div>
    </div>
  );
};
