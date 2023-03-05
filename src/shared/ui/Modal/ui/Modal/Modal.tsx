import { useTheme } from 'app/providers/ThemeProvider';
import {
  FC, MouseEventHandler, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';

import s from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.closing]: isClosing,
    dark: theme === 'dark',
  };

  const closeHandler = () => {
    if (onClose) {
      setIsClosing(true);
    }
  };

  const keyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsClosing(true);
    }
  }, []);

  const contentClickHandler: MouseEventHandler<HTMLDivElement> = (e) => { e.stopPropagation(); };

  useEffect(() => {
    if (!isClosing) {
      return () => {};
    }

    const timer = setTimeout(() => {
      if (!onClose) {
        return;
      }
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
    return () => clearTimeout(timer);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return () => {};
    }

    if (!isMounted) {
      setIsMounted(true);
    }
    window.addEventListener('keydown', keyDownHandler);
    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [isMounted, isOpen, keyDownHandler]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames([s.modal, className], mods)}
      >
        <div className={s.overlay} onClick={closeHandler}>
          <div
            className={classNames([s.content])}
            onClick={contentClickHandler}
          >
            { children }
          </div>
        </div>
      </div>
    </Portal>
  );
};
