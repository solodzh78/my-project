import { useSelector } from 'react-redux';
import {
  ArticleList, ArticleView, ArticleViewSelector, VIEW,
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

interface ArticlesPageProps {
  className?: string;
}

// isArticleType - typeGuard function for type ArticleView
const isArticleType = (value: unknown): value is ArticleView => (
  Boolean(Object.values(VIEW).find((elem) => elem === value))
);
  // Object
  //   .values(VIEW)
  //   .reduce((akk, elem) => (
  //     elem === value
  //       ? true
  //       : akk
  //   ), false));

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
    const viewFromLS = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY);
    if (viewFromLS && isArticleType(viewFromLS)) {
      dispatch(articlesPageActions.setView(viewFromLS));
    }
    dispatch(fetchArticlesList({ page: 1 }));
  });

  if (error) {
    <Text text={error} variant="error" />;
  }

  return (
    <DynamicConnectAsyncReducers asyncReducers={{ articlesPage: articlesPageReducer }}>
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
