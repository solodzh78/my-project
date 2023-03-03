import { SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import s from './SideBarItem.module.scss';

interface SideBarItemProps {
  name: string;
  path: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  collapsed: boolean;
}

export const SideBarItem = (props: SideBarItemProps) => {
  const {
    name, path, Icon, collapsed,
  } = props;

  return (
    <AppLink
      className={s.item}
      to={path}
      theme="secondary"
    >
      <Icon className={s.icon} />
      <div className={classNames([s.link], { [s.collapsed]: collapsed })}>
        { name}
      </div>
    </AppLink>
  );
};
