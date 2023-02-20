import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LAngSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button } from 'shared/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import { RoutePaths } from 'shared/config/routes';
import s from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggle = () => setCollapsed((prev) => !prev);
  return (
    <div
      data-testid="sidebar"
      className={classNames(
        [s.sidebar, className],
        { [s.collapsed]: collapsed },
      )}
    >
      <Button
        className={s.toggleButton}
        data-testid="sidebar-toggle"
        type="button"
        theme="backgroundInverted"
        square
        size="size_l"
        onClick={toggle}
        title={collapsed ? t('Развернуть') : t('Свернуть')}
      >
        { collapsed ? '>' : '<' }
      </Button>
      <div className={s.items}>
        <AppLink
          className={s.item}
          to={RoutePaths.main}
          theme="secondary"
        >
          <MainIcon className={s.icon} />
          <div className={s.link}>
            { t('Главная')}
          </div>
        </AppLink>
        <AppLink
          className={s.item}
          to={RoutePaths.about}
          theme="secondary"
        >
          <AboutIcon className={s.icon} />
          <div className={s.link}>
            { t('О сайте')}
          </div>
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={s.lang} />
      </div>
    </div>
  );
};
