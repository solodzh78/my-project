import {
  FC,
  useCallback,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  isOpen: boolean;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, isOpen } = props;
  const { t } = useTranslation();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserName = (value: string) => setUserName(value);
  const onChangePassword = (value: string) => setPassword(value);

  const onLoginClick = useCallback(() => {

  }, []);

  return (
    <div className={classNames([s.loginform, className])}>
      <Input
        type="text"
        className={s.input}
        placeholder={t('loginform-placeholder-user')}
        value={username}
        onChange={onChangeUserName}
        isOpen={isOpen}
      />
      <Input
        type="text"
        className={s.input}
        placeholder={t('loginform-placeholder-password')}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        className={s.loginBtn}
        onClick={onLoginClick}
      >
        { t('loginform-login-btn')}
      </Button>
    </div>
  );
};
