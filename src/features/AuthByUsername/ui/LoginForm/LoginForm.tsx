/* eslint-disable react/prop-types */
import {
  FormEventHandler,
  memo,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text/Text';
import {
  DynamicConnectAsyncReducers, ReducersList,
} from 'shared/lib/DynamicConnectAsyncReducers/ui/DynamicConnectAsyncReducers';
import {
  getLoginFormError,
  getLoginFormIsLoading,
  getLoginFormPassword,
  getLoginFormUsername,
} from 'features/AuthByUsername/model/selectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  isOpen: boolean;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, isOpen, onSuccess } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginFormUsername);
  const password = useSelector(getLoginFormPassword);
  const isLoading = useSelector(getLoginFormIsLoading);
  const error = useSelector(getLoginFormError);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    onLoginClick();
  }, [onLoginClick]);

  return (
    <DynamicConnectAsyncReducers
      stayAfterUnmount={false}
      asyncReducers={initialReducers}
    >
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
          autoFocus={isOpen}
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
    </DynamicConnectAsyncReducers>
  );
});

LoginForm.displayName = 'LoginForm';
