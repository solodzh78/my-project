/* eslint-disable i18next/no-literal-string */
import { userActions } from 'entities/User';
import { getUserAuthData } from 'entities/User/model/selectors';
import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import s from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const dispatch = useDispatch();
  const onCloseModal = useCallback(() => { setIsOpenAuthModal(false); }, []);
  const onShowModal = useCallback(() => { setIsOpenAuthModal(true); }, []);
  const onLogout = useCallback(() => { dispatch(userActions.logout()); }, [dispatch]);

  const userAuthData = useSelector(getUserAuthData);

  if (userAuthData) {
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
      <LoginModal
        isOpen={isOpenAuthModal}
        onClose={onCloseModal}
      />
      <Button
        theme="clearInverted"
        className={s.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
