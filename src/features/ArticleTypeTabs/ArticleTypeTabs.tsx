import {
  FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType, articleType } from 'entities/Article';
import s from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
  className?: string;
  // typeTabs: '',
  type: ArticleType,
  onChangeTab: (type: ArticleType) => void;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props: ArticleTypeTabsProps) => {
  const { className, onChangeTab, type } = props;

  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: articleType.ALL,
      content: t('ALL'),
    },
    {
      value: articleType.IT,
      content: t('IT'),
    },
    {
      value: articleType.ECONOMICS,
      content: t('ECONOMICS'),
    },
    {
      value: articleType.SCIENCE,
      content: t('SCIENCE'),
    },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeTab(tab.value as ArticleType);
  }, [onChangeTab]);

  return (
    <Tabs
      className={classNames([s.tabs, className])}
      tabs={typeTabs}
      value={type}
      onTabClick={onTabClick}
    />
  );
});
