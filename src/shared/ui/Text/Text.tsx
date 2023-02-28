import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';

type TextVariants = 'primary' | 'error'

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariants;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = 'primary',
  } = props;

  return (
    <div className={classNames([s.textComponent, s[variant], className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
Text.displayName = 'Text';
