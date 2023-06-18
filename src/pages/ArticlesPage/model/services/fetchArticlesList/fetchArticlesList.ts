import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article, articleType } from 'entities/Article';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/ArticlesPageSelectors';

interface FetchArticleListArguments {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListArguments,
  ThunkConfig<string>
  >(
    'articlesPage/fetchArticlesList',
    async (_, thunkAPI) => {
      const { extra, getState, rejectWithValue } = thunkAPI;
      const limit = getArticlesPageLimit(getState());
      const sort = getArticlesPageSort(getState());
      const order = getArticlesPageOrder(getState());
      const search = getArticlesPageSearch(getState());
      const page = getArticlesPageNum(getState());
      const type = getArticlesPageType(getState());

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _page: page,
            _limit: limit,
            _sort: sort,
            _order: order,
            q: search,
            type: type === articleType.ALL ? undefined : type,
          },
        });

        return response.data;
      } catch (error) {
        let errorMessage;
        if (axios.isAxiosError(error)) {
        // Access to config, request, and response
          const { response } = error;
          if (!response) {
            return rejectWithValue(error.message || 'Неизвестная ошибка');
          }
          errorMessage = response.data.message;
        } else if (error instanceof Error) {
        // Just a stock error
          errorMessage = error.message;
        }

        return rejectWithValue(errorMessage || 'Неизвестная ошибка');
      }
    },
  );
