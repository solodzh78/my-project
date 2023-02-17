import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ValueOf } from 'shared/types/ValueOf';

import s from './Button.module.scss';

const ButtonTheme = {
  CLEAR: 'clear',
} as const;

type ButtonThemeType = ValueOf<typeof ButtonTheme>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeType;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames([s.Button, className, s[theme]])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};
