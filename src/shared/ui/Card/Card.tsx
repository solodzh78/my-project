import {
  FC, HtmlHTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ValueOf } from 'shared/types/ValueOf';
import s from './Card.module.scss';

export const cardVariant = {
  NORMAL: 'normal',
  OUTLINED: 'outlined',
} as const;

type CardVariant = ValueOf<typeof cardVariant>

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
}

export const Card: FC<CardProps> = memo((props: CardProps) => {
  const {
    className, children, variant = cardVariant.NORMAL, ...otherProps
  } = props;

  return (
    <div
      className={classNames([s.Card, className, s[variant]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
