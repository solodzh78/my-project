import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/ArticlesPageSelectors';

interface fetchArticleListArguments {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticleListArguments,
  ThunkConfig<string>
  >(
    'articlesPage/fetchArticlesList',
    async (args, thunkAPI) => {
      const { extra, getState, rejectWithValue } = thunkAPI;
      const { page = 1 } = args;
      const limit = getArticlesPageLimit(getState());

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _page: page,
            _limit: limit,
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
