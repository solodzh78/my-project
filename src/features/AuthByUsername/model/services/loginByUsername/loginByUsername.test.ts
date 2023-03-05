import { AxiosError } from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { DeepPartial } from 'shared/types/DeepPartial';
// import { AxiosError } from 'axios';
// import { DeepPartial } from 'shared/types/DeepPartial';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  test('login successful', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    const userFromServer = { id: '1', username: 'user1' };
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userFromServer }));

    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userFromServer));
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(thunk.api.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userFromServer);
  });

  test('login failed with 401 status', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    const err: DeepPartial<AxiosError> = {
      response: {
        status: 401,
        data: {},
        config: {},
        headers: { a: 'a' },
        statusText: 'status text',
      },
      config: {},
      isAxiosError: true,
      message: 'message',
    };

    thunk.api.post.mockRejectedValueOnce(err);

    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    // .toBeCalled and .toHaveBeenCalled is the same
    // expect(dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toBeCalled();
    expect(result.payload).toBe('Такое сочетание логина и пароля не найдено');
  });

  test('login failed with 403 status', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    const responseFromServer = {
      response: {
        status: 403,
        data: {
          message: 'Error with status 403',
        },
      },
      isAxiosError: true,
    };
    thunk.api.post.mockReturnValue(Promise.reject(responseFromServer));

    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.post).toBeCalled();
    expect(result.payload).toBe('Error with status 403');
  });

  test('login failed with Network Error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    const responseFromServer = new Error('Network Error');

    thunk.api.post.mockReturnValue(Promise.reject(responseFromServer));

    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.post).toBeCalled();
    expect(result.payload).toBe('Network Error');
  });

  test('login failed with Unknown Error', async () => {
    const responseFromServer = {};
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.reject(responseFromServer));

    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.post).toBeCalled();
    expect(result.payload).toBe('Неизвестная ошибка');
  });

  test('login failed with empty response', async () => {
    const responseFromServer = {};
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve(responseFromServer));

    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.post).toBeCalled();
    expect(result.payload).toBe('Received empty response');
  });
});
