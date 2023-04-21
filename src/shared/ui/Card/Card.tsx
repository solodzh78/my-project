import {
  FC, HtmlHTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Card.module.scss';

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={classNames([s.Card, className])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
