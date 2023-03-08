import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Profile } from 'entities/Profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { getState, extra, rejectWithValue } = thunkAPI;

    try {
      const formData = getState().profile?.data;
      const response = await extra.api.put<Profile>('/profile', formData);
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
