import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article';
import { DynamicConnectAsyncReducers } from 'shared/lib/DynamicConnectAsyncReducers';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { useSearchParams } from 'react-router-dom';
import { articlesPageReducer, getArticles }
  from '../../model/slices/articlesPageSlice';
import s from './ArticlesPage.module.scss';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/ArticlesPageSelectors';
import { fetchNextArticlesPage }
  from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return <Text text={error} variant="error" />;
  }

  return (
    <DynamicConnectAsyncReducers
      asyncReducers={{ articlesPage: articlesPageReducer }}
      stayAfterUnmount
    >
      <Page
        className={classNames([s.ArticlesPage, className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlesPageFilters />
        <ArticleList
          className={s.list}
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </Page>
    </DynamicConnectAsyncReducers>
  );
};

export { ArticlesPage };
