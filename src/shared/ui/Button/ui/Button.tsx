import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ValueOf } from 'shared/types/ValueOf';

import s from './Button.module.scss';

const ButtonTheme = {
  CLEAR: 'clear',
  OUTLINE: 'outline',
  BACKGROUND: 'background',
  BACKGROUND_INVERTED: 'backgroundInverted',
} as const;

type ButtonThemeType = ValueOf<typeof ButtonTheme>
type ButtonSize = 'size_m' | 'size_l' | 'size_xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeType;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square = false,
    size = 'size_l',
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [s.square]: square,
  };

  return (
    <button
      type="button"
      className={
        // eslint-disable-next-line function-paren-newline
        classNames(
          [
            className,
            s.Button,
            s[theme],
            s[size],
          ],
          mods,
        )
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};
