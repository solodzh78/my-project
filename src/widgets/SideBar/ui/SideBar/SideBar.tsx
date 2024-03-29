import {
  FC, memo, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'features/LAngSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import s from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = memo((props: SideBarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const sidebarItemsList = useSelector(getSidebarItems);

  const toggle = () => setCollapsed((prev) => !prev);

  const itemsList = useMemo(
    () => sidebarItemsList
      .map(({ name, path, Icon }) => (
        <SideBarItem
          name={t(name)}
          path={path}
          Icon={Icon}
          collapsed={collapsed}
          key={path}
        />
      )),
    [collapsed, sidebarItemsList, t],
  );

  return (
    <aside
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
      <VStack role="navigation" gap={16} className={s.items}>
        {itemsList}
      </VStack>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={s.lang} />
      </div>
    </aside>
  );
});
