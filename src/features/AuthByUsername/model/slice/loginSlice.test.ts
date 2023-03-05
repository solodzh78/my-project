import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
  test('test setUsername', () => {
    const state: LoginSchema = { username: '', password: '', isLoading: false };
    expect(loginReducer(state, loginActions.setUsername('user')))
      .toEqual({ username: 'user', password: '', isLoading: false });
  });

  test('test setPassword', () => {
    const state: LoginSchema = { username: '', password: '', isLoading: false };
    expect(loginReducer(state, loginActions.setPassword('123')))
      .toEqual({ username: '', password: '123', isLoading: false });
  });

  test('test empty state', () => {
    expect(loginReducer(undefined, loginActions.setUsername('user')))
      .toEqual({ username: 'user', password: '', isLoading: false });
  });
});
