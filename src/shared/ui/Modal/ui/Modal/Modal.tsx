import { useTheme } from 'app/providers/ThemeProvider';
import { FC, ReactNode } from 'react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { classNames } from '../../../../lib/classNames/classNames';
import { Portal } from '../../../Portal';
import { Overlay } from '../../../Overlay/Overlay';

import s from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const { theme } = useTheme();

  const {
    isClosing, isOpened, isMounted, close,
  } = useModal({ onClose, isOpen, animationDelay: 300 });

  const mods: Record<string, boolean> = {
    [s.opened]: isOpened,
    [s.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames([s.modal, className, theme, 'app_modal'], mods)}
      >
        <Overlay onClick={close} />
        <div
          className={classNames([s.content])}
        >
          { children }
        </div>
      </div>
    </Portal>
  );
};
