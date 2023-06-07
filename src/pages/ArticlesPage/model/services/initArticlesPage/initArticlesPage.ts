import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleView, VIEW } from 'entities/Article/model/types/article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { getArticlesPageInited } from '../../selectors/ArticlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// isArticleType - typeGuard function for type ArticleView
const isArticleType = (value: unknown): value is ArticleView => (
  Boolean(Object.values(VIEW).find((elem) => elem === value))
);

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
      const { getState, dispatch } = thunkAPI;
      const inited = getArticlesPageInited(getState());

      if (!inited) {
        dispatch(articlesPageActions.setInited());
        const viewFromLS = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY);
        if (viewFromLS && isArticleType(viewFromLS)) {
          dispatch(articlesPageActions.setView(viewFromLS));
        }
        dispatch(fetchArticlesList({ page: 1 }));
      }
    },
  );
