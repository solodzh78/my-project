import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ValueOf } from 'shared/types/ValueOf';
import s from './AppLink.module.scss';


export type LinkThemeType = ValueOf<typeof LinkTheme>

export const LinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: LinkThemeType
}

export const AppLink: FC<AppLinkProps> = (props) => {

  const {
    className, 
    children, 
    to, 
    theme = LinkTheme.PRIMARY, 
    ...otherProps
  } = props;

  return (
    <Link 
      className={classNames([s.applink, className, s[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  )
}