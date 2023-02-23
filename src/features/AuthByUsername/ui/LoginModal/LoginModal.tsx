import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

import s from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      className={classNames([s.loginmodal, className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm isOpen={isOpen} />
    </Modal>
  );
};
