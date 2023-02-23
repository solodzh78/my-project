/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const onCloseModal = useCallback(() => {
    setIsOpenAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsOpenAuthModal(true);
  }, []);

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
