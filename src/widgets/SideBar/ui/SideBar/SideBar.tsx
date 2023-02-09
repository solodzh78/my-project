import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LAngSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import s from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {

  const {className} = props;

  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => setCollapsed(prev => !prev)



  return (
    <div className={classNames([s.sidebar, className], {[s.collapsed]: collapsed})}>
      <button onClick={toggle}>TOGGLE</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang}/>        
      </div>
    </div>
  );
};
