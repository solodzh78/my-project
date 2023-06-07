import { useSelector } from 'react-redux';
import {
  ArticleList, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { DynamicConnectAsyncReducers } from 'shared/lib/DynamicConnectAsyncReducers';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Page } from 'shared/ui/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { articlesPageActions, articlesPageReducer, getArticles }
  from '../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import s from './ArticlesPage.module.scss';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView,
} from '../model/selectors/ArticlesPageSelectors';
import { fetchNextArticlesPage }
  from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

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
  const page = useSelector(getArticlesPageNum);

  const onChangeView = useCallback((view: ArticleView) => {
    localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, view);
    dispatch(articlesPageActions.setView(view));
    dispatch(fetchArticlesList({ page }));
  }, [dispatch, page]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  if (error) {
    <Text text={error} variant="error" />;
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
        <ArticleViewSelector
          className={s.selector}
          view={view}
          onViewClick={onChangeView}
        />
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
        />
      </Page>
    </DynamicConnectAsyncReducers>
  );
};

export { ArticlesPage };
