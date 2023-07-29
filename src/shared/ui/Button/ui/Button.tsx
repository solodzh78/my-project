import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ValueOf } from 'shared/types/ValueOf';

import s from './Button.module.scss';

const ButtonTheme = {
  CLEAR: 'clear',
  CLEAR_INVERTED: 'clearInverted',
  OUTLINE: 'outline',
  OUTLINE_RED: 'outline-red',
  BACKGROUND: 'background',
  BACKGROUND_INVERTED: 'backgroundInverted',
} as const;

type ButtonThemeType = ValueOf<typeof ButtonTheme>
type ButtonSize = 'size_m' | 'size_l' | 'size_xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeType | undefined;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    square = false,
    size = 'size_m',
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [s.square]: square,
    [s.disabled]: disabled,
  };
  const themeClass = theme ? s[theme] : undefined;

  return (
    <button
      type="button"
      disabled={disabled}
      className={
        classNames(
          [
            s.Button,
            themeClass,
            s[size],
            className,
          ],
          mods,
        )
      }
      {...otherProps}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';
