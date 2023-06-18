import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum }
  from '../../selectors/ArticlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
  >(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
      const { getState, dispatch } = thunkAPI;
      const isLoading = getArticlesPageIsLoading(getState());
      const page = getArticlesPageNum(getState());
      const hasMore = getArticlesPageHasMore(getState());

      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
      }
    },
  );
