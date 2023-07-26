import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';

type TextVariants = 'primary' | 'error' | 'inverted';
type TextAlign = 'right' | 'left' | 'center';
type TextSize = 'size_s' | 'size_m' | 'size_l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariants;
  align?: TextAlign;
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_l: 'h1',
  size_m: 'h2',
  size_s: 'h3',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = 'primary',
    align = 'left',
    size = 'size_m',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames([s.textComponent, s[variant], className, s[align], s[size]])}>
      {title && <HeaderTag className={s.title}>{title}</HeaderTag>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
Text.displayName = 'Text';
