/* eslint-disable i18next/no-literal-string */
import { isUserAdmin, isUserManager, userActions } from 'entities/User';
import { getUserAuthData } from 'entities/User/model/selectors';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePaths } from 'shared/config/routes';
import { DropDown } from 'shared/ui/DropDown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import s from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo((props: NavBarProps) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const onCloseModal = useCallback(() => { setIsOpenAuthModal(false); }, []);
  const onShowModal = useCallback(() => { setIsOpenAuthModal(true); }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  const authData = useSelector(getUserAuthData);

  if (authData) {
    return (
      <header className={classNames([s.navbar, className])}>
        <HStack>
          <Text className={s.appName} title={t('my app')} variant="inverted" />
          <AppLink
            className={s.create}
            to={RoutePaths.article_create}
            theme="secondary"
          >
            {t('create_new_article')}
          </AppLink>
        </HStack>
        <DropDown
          className={s.dropdown}
          direction="down_left"
          items={
            [
              ...(isAdmin
                ? [{
                  content: t('admin_panel'),
                  href: RoutePaths.admin_panel,
                }]
                : []),
              {
                content: t('PROFILE'),
                href: RoutePaths.profile + authData.id,
              },
              {
                content: t('Выйти'),
                onClick: onLogout,
              },
            ]
          }
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
      </header>
    );
  }

  return (
    <header className={classNames([s.navbar, s.withoutAuth, className])}>
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
    </header>
  );
});
