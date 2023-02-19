import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LAngSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

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
      <button data-testid="sidebar-toggle" type="button" onClick={toggle}>
        { collapsed ? t('Развернуть') : t('Свернуть') }
      </button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};
