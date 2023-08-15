import { useCallback, useEffect, useState } from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay?: number;
}

export const useModal = (props: UseModalProps) => {
  const {
    animationDelay = 300, onClose, isOpen,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const close = () => {
    if (onClose) {
      setIsClosing(true);
    }
  };

  const keyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsClosing(true);
    }
  }, []);

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
    }, animationDelay);
    return () => clearTimeout(timer);
  }, [isClosing, onClose, animationDelay]);

  useEffect(() => {
    if (isOpened) {
      return () => {};
    }

    const timer = setTimeout(() => {
      setIsOpened(true);
    }, 0);
    return () => clearTimeout(timer);
  }, [isOpened]);

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

  return {
    isClosing,
    isOpened,
    isMounted,
    close,
  };
};
