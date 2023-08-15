import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import s from './Drawer.module.scss';
import { Overlay } from '../../../Overlay/Overlay';
import { Portal } from '../../../Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen,
    lazy,
  } = props;
  const { theme } = useTheme();

  const { close, isClosing, isMounted } = useModal({ isOpen, onClose, animationDelay: 300 });

  const mods: Mods = {
    [s.opened]: isOpen,
    [s.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames([className, theme, 'app_drawer', s.Drawer], mods)}>
        <Overlay onClick={close} />
        <div
          className={s.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
