import {
  ArticleSortField, ArticleType, ArticleView, VIEW,
} from 'entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types/SortOrder';
// import { useSearchParams } from 'react-router-dom';
import { getArticlesPageInited } from '../../selectors/ArticlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// isArticleType - typeGuard function for type ArticleView
const isArticleType = (value: unknown): value is ArticleView => (
  Boolean(Object.values(VIEW).find((elem) => elem === value))
);

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
  >(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
      const { getState, dispatch } = thunkAPI;
      const inited = getArticlesPageInited(getState());
      // const [searchParams] = useSearchParams();

      if (!inited) {
        dispatch(articlesPageActions.setInited());
        const viewFromLS = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY);
        if (viewFromLS && isArticleType(viewFromLS)) {
          dispatch(articlesPageActions.setView(viewFromLS));
        }

        const typeFromUrl = searchParams.get('type') as ArticleType;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const searchFromUrl = searchParams.get('search') as ArticleSortField;

        if (typeFromUrl) {
          dispatch(articlesPageActions.setType(typeFromUrl));
        }
        if (sortFromUrl) {
          dispatch(articlesPageActions.setSort(sortFromUrl));
        }
        if (orderFromUrl) {
          dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (searchFromUrl) {
          dispatch(articlesPageActions.setSearch(searchFromUrl));
        }

        dispatch(fetchArticlesList({ replace: false }));
      }
    },
  );
