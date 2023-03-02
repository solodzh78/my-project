import { userActions } from 'entities/User';
import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  test('login successful', async () => {
    const userFromServer = { id: '1', username: 'user1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userFromServer }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userFromServer));
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(mockedAxios.post).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userFromServer);
  });

  test('login failed with 401 status', async () => {
    const responseFromServer = {
      response: {
        status: 401,
      },
    };
    mockedAxios.post.mockReturnValue(Promise.reject(responseFromServer));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    // .toBeCalled and .toHaveBeenCalled is the same
    // expect(dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toBeCalled();
    expect(result.payload).toBe('Такое сочетание логина и пароля не найдено');
  });

  test('login failed with 403 status', async () => {
    const responseFromServer = {
      response: {
        status: 403,
        data: {
          message: 'Error with status 403',
        },
      },
    };
    mockedAxios.post.mockReturnValue(Promise.reject(responseFromServer));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.payload).toBe('Error with status 403');
  });

  test('login failed with Network Error', async () => {
    const responseFromServer = {
      // status: null,
      message: 'Network Error',
    };
    mockedAxios.post.mockReturnValue(Promise.reject(responseFromServer));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.payload).toBe('Network Error');
  });

  test('login failed with Unknown Error', async () => {
    const responseFromServer = {};
    mockedAxios.post.mockReturnValue(Promise.reject(responseFromServer));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.payload).toBe('Неизвестная ошибка');
  });

  test('login failed with empty response', async () => {
    const responseFromServer = {};
    mockedAxios.post.mockReturnValue(Promise.resolve(responseFromServer));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123user', password: '123pass' });

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(mockedAxios.post).toBeCalled();
    expect(result.payload).toBe('Received empty response');
  });
});

// describe('loginByUsername', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });

//   test('login successful', async () => {
//     const userFromServer = { id: '1', username: 'user1' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userFromServer }));
//     const thunk = new TestAsyncThunk(loginByUsername);
//     const result = await thunk.callThunk({ username: '123user', password: '123pass' });

//     const action = loginByUsername({ username: '123user', password: '123pass' });
//     const result = await action(dispatch, getState, undefined);

//     expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userFromServer));
//     expect(thunk.dispatch).toBeCalledTimes(3);
//     expect(mockedAxios.post).toBeCalled();
//     expect(result.meta.requestStatus).toBe('fulfilled');
//     expect(result.payload).toEqual(userFromServer);
//   });

//   test('login failed', async () => {
//     const responseFromServer = {
//       response: {
//         status: 401,
//       },
//     };
//     mockedAxios.post.mockReturnValue(Promise.reject(responseFromServer));

//     const action = loginByUsername({ username: '123user', password: '123pass' });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toBeCalledTimes(2);
//     // .toBeCalled and .toHaveBeenCalled is the same
//     // expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toBeCalled();
//     expect(result.payload).toEqual('Такое сочетание логина и пароля не найдено');
//   });
// });

// result:  {
//   type: 'loginForm/loginByUsername/fulfilled',
//   payload: { id: '1', username: 'user1' },
//   meta: {
//     arg: { username: '123user', password: '123pass' },
//     requestId: 'uJ9_KeyYOTnbAitHmKA9t',
//     requestStatus: 'fulfilled'
//   }
// }
