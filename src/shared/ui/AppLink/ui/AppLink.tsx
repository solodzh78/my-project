import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ValueOf } from 'shared/types/ValueOf';
import s from './AppLink.module.scss';

export const LinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  RED: 'red',
} as const;

export type LinkThemeType = ValueOf<typeof LinkTheme>

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: LinkThemeType
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </Link>
  );
});
