import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import s from './Drawer.module.scss';
import { Overlay } from '../../../Overlay/Overlay';
import { Portal } from '../../../Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen,
  } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [s.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames([className, theme, 'app_drawer', s.Drawer], mods)}>
        <Overlay onClick={onClose} />
        <div
          className={s.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
