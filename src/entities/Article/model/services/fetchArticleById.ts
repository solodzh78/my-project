import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article } from '../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig>(
  'articles/fetchArticleById',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Article>(`/articles/${id}`);

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
