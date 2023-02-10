import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import s from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className = '' } = props;
  return (
    <div className={classNames([s.navbar, className])}>
      <div className={s.links}>
        <AppLink className={s.mainLink} to="/">Main</AppLink>
        <AppLink to="/about" theme="secondary">About</AppLink>
      </div>
    </div>
  );
};
