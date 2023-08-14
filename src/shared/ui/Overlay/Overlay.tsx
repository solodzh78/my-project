import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import s from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick, children } = props;

  return (
    <div onClick={onClick} className={classNames([s.Overlay, className])}>
      {children}
    </div>
  );
});
