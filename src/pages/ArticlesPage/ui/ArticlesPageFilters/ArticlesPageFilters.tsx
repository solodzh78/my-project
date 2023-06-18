import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ArticleView,
  ArticleViewSelector,
  ArticleSortSelector,
  ArticleSortField,
  ArticleType,
} from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input';
import { SortOrder } from 'shared/types/SortOrder';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs';
import s from './ArticlesPageFilters.module.scss';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageOrder,
  getArticlesPageSort,
  getArticlesPageView,
  getArticlesPageSearch,
  getArticlesPageType,
} from '../../model/selectors/ArticlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
  (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const setSearchParams = useSearchParams()[1];

    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    // const page = useSelector(getArticlesPageNum);
    const type = useSelector(getArticlesPageType);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    useEffect(() => {
      const newSearchParams = {
        sort,
        order,
        search,
        type,
      };
      setSearchParams(newSearchParams);
    }, [order, search, setSearchParams, sort, type]);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, view);
      dispatch(articlesPageActions.setView(view));
      dispatch(articlesPageActions.setPage(1));
      // dispatch(fetchArticlesList({ page }));
    }, [dispatch]);

    const onChangeType = useCallback((value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((value: string) => {
      dispatch(articlesPageActions.setSearch(value));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    return (
      <div
        data-testid="ArticlesPageFilters"
        className={classNames([s.ArticlesPageFilters, className])}
      >
        <div className={s.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticleViewSelector
            className={s.selector}
            view={view}
            onViewClick={onChangeView}
          />
        </div>
        <Card className={s.search}>
          <Input
            placeholder={t('search')}
            value={search}
            onChange={onChangeSearch}
          />
        </Card>
        <ArticleTypeTabs
          className={s.tabs}
          type={type}
          onChangeTab={onChangeType}
        />

      </div>
    );
  },
);
