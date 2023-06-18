import {
  FC, ReactNode, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Tabs.module.scss';
import { Card, cardVariant } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
  const {
    className, tabs, value, onTabClick,
  } = props;

  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div
      data-testid="Tabs"
      className={classNames([s.Tabs, className])}
    >
      {tabs.map((tab) => (
        <Card
          className={s.tab}
          key={tab.value}
          variant={tab.value === value ? cardVariant.NORMAL : cardVariant.OUTLINED}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
