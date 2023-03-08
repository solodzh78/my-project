import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Profile>('/profile');

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
