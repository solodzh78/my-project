import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  string | undefined,
  ThunkConfig<string>
  >(
    'articleRecommendations/fetchArticleRecommendations',
    async (articleId, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;

      if (!articleId) {
        return rejectWithValue('error');
      }

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _limit: 4,
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
