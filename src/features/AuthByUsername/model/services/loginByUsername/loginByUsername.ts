import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  'loginForm/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error('Received empty response');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      const { response } = error;
      if (!response) {
        return thunkAPI.rejectWithValue(error.message || 'Неизвестная ошибка');
      }

      let errorMessage = '';
      if (response.status === 401) {
        errorMessage = 'Такое сочетание логина и пароля не найдено';
      } else {
        errorMessage = error.response.data.message;
      }

      return thunkAPI.rejectWithValue(errorMessage || 'Неизвестная ошибка');
    }
  },
);
