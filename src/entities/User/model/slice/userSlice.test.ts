import { UserSchema } from '../types/userSchema';
import { userReducer, userActions } from './userSlice';

describe('counterSlice.test', () => {
  test('test setAuthData', () => {
    const state: UserSchema = { authData: undefined, _isMounted: false };
    expect(userReducer(state, userActions.setAuthData({ id: '1', username: 'user' })))
      .toEqual({ authData: { id: '1', username: 'user' } });
  });

  test('test logout', () => {
    const state: UserSchema = { authData: { id: '1', username: 'user' }, _isMounted: true };
    expect(userReducer(state, userActions.logout()))
      .toEqual({ authData: undefined });
  });
});

// { id: '1', username: 'user' }
