import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropDown } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { RoutePaths } from 'shared/config/routes';
import s from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <DropDown
      data-testid="AvatarDropdown"
      className={classNames([s.AvatarDropdown, className])}
      direction="down_left"
      items={
        [
          ...(isAdminPanelAvailable
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
  );
});
