import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className = '' } = props;
  return (
    <div className={classNames([s.navbar, className])}>
      <div className={s.links} />
    </div>
  );
};
