import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
  >(
    'articlesPage/fetchArticlesList',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
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
