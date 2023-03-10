/* eslint-disable i18next/no-literal-string */
import { userActions } from 'entities/User';
import { getUserAuthData } from 'entities/User/model/selectors';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button';
import s from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo((props: NavBarProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const dispatch = useAppDispatch();
  const onCloseModal = useCallback(() => { setIsOpenAuthModal(false); }, []);
  const onShowModal = useCallback(() => { setIsOpenAuthModal(true); }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }, [dispatch]);

  const authData = useSelector(getUserAuthData);

  if (authData) {
    return (
      <div className={classNames([s.navbar, className])}>
        <Button
          theme="clearInverted"
          className={s.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames([s.navbar, className])}>
      {isOpenAuthModal && (
        <LoginModal
          isOpen={isOpenAuthModal}
          onClose={onCloseModal}
        />
      )}
      <Button
        theme="clearInverted"
        className={s.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
