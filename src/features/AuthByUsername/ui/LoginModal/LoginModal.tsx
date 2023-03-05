import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import { AsyncLoginForm as LoginForm } from '../LoginForm/AsyncLoginForm';

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
      className={className}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm
        isOpen={isOpen}
        onSuccess={onClose}
      />
    </Modal>
  );
};
