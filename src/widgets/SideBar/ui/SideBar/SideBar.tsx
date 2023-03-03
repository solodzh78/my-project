import {
  FC, memo, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LAngSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button } from 'shared/ui/Button';
import { SideBarLinks } from '../../model/sideBarLinks';
import s from './SideBar.module.scss';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = memo((props: SideBarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggle = () => setCollapsed((prev) => !prev);

  const itemsList = useMemo(() => (
    <>
      {SideBarLinks.map(({ name, path, Icon }) => (
        <SideBarItem
          name={t(name)}
          path={path}
          Icon={Icon}
          collapsed={collapsed}
          key={path}
        />
      ))}
    </>
  ), [collapsed, t]);

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
        {itemsList}
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={s.lang} />
      </div>
    </div>
  );
});
