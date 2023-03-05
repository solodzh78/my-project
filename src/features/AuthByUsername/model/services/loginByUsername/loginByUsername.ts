import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import axios from 'axios';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
  'loginForm/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', authData);
      const { data } = response;
      if (!data) {
        throw new Error('Received empty response');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setAuthData(data));

      return response.data;
    } catch (error) {
      // console.log('error: ', error);
      // @ts-ignore
      // console.log('error.response: ', error?.response);

      let errorMessage;
      if (axios.isAxiosError(error)) {
        // Access to config, request, and response
        // console.log('is Axios Error');
        const { response } = error;
        if (!response) {
          return rejectWithValue(error.message || 'Неизвестная ошибка');
        }
        if (response.status === 401) {
          errorMessage = 'Такое сочетание логина и пароля не найдено';
        } else {
          errorMessage = response.data.message;
        }
      } else if (error instanceof Error) {
        // Just a stock error
        // console.log('Just a stock error');
        errorMessage = error.message;
      }

      return rejectWithValue(errorMessage || 'Неизвестная ошибка');
      // return rejectWithValue('error');
    }
  },
);
