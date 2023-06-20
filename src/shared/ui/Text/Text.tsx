import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';

type TextVariants = 'primary' | 'error' | 'inverted';
type TextAlign = 'right' | 'left' | 'center';
type TextSize = 'size_m' | 'size_l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariants;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = 'primary',
    align = 'left',
    size = 'size_m',
  } = props;

  return (
    <div className={classNames([s.textComponent, s[variant], className, s[align], s[size]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
Text.displayName = 'Text';
