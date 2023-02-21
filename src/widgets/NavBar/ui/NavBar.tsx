/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import s from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
  const { className = '' } = props;
  const { t } = useTranslation();
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsOpenAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames([s.navbar, className])}>
      <Modal
        isOpen={isOpenAuthModal}
        onClose={onToggleModal}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore vel consequatur
        qui. Harum eos nihil consectetur et sit quidem excepturi velit ex, dicta aliquid
        blanditiis doloribus, quam suscipit fuga.
      </Modal>
      <Button
        theme="clearInverted"
        className={s.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
