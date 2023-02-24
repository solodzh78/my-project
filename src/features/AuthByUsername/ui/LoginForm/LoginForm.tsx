/* eslint-disable react/prop-types */
import {
  FC,
  FormEventHandler,
  memo,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors';
import { loginActions } from '../../model/slice/loginSlice';

import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  isOpen: boolean;
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className, isOpen } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    onLoginClick();
  }, [onLoginClick]);

  return (
    <form
      className={classNames([s.loginform, className])}
      onSubmit={onSubmit}
    >
      <Text title={t('login_form_title')} />
      {error && (
        <Text text={error} variant="error" />
      )}
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
        // onClick={onLoginClick}
        disabled={isLoading}
        type="submit"
        theme="outline"
      >
        { t('loginform-login-btn')}
      </Button>
    </form>
  );
});
