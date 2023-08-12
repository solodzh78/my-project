import { FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types/SortOrder';
import { Select, SelectOption } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '../../model/types/ArticleSortField';
import s from './ArticleSortSelector.module.scss';
import { articleSortField } from '../../model/const/articleSortField';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder?: (newOrder: SortOrder) => void;
  onChangeSort?: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
  (props: ArticleSortSelectorProps) => {
    const {
      className, sort, order, onChangeSort, onChangeOrder,
    } = props;

    const { t } = useTranslation('articles');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
      {
        value: 'asc',
        content: t('asc'),
      },
      {
        value: 'desc',
        content: t('desc'),
      },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
      {
        value: articleSortField.CREATED,
        content: t('date'),
      },
      {
        value: articleSortField.TITLE,
        content: t('title'),
      },
      {
        value: articleSortField.VIEWS,
        content: t('views'),
      },
    ], [t]);

    return (
      <div className={classNames([s.articleSortSelector, className])}>
        <Select
          className={s.sort}
          options={sortFieldOptions}
          label={t('sort')}
          value={sort}
          onChange={onChangeSort}
        />
        <Select
          className={s.order}
          options={orderOptions}
          label={t('at')}
          value={order}
          onChange={onChangeOrder}
        />
      </div>
    );
  },
);
