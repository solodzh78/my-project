import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ValueOf } from 'shared/types/ValueOf';

import s from './AppButton.module.scss';

const AppButtonTheme = {
  CLEAR: 'clear',
} as const;

type AppButtonThemeType = ValueOf<typeof AppButtonTheme>

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: AppButtonThemeType;
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className, children, theme, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames([s.appbutton, className, s[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
