import authReducer, { setToken, setUser, logout, AuthState, User } from './authSlice';

describe('authSlice', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return initial state', () => {
    const initialState = authReducer(undefined, { type: 'unknown' });

    expect(initialState.user).toBeNull();
    expect(initialState.token).toBeNull();
  });

  test('should handle setToken', () => {
    const token = 'test-token';

    const state = authReducer({ token: null, user: null } as AuthState, setToken(token));

    expect(state.token).toBe(token);
    expect(localStorage.getItem('auth_token')).toBe(token);
  });

  test('should handle setUser', () => {
    const user: User = {
      id: '1',
      name: 'Albina',
      email: 'albina@test.com',
      role: 'user',
    };

    const state = authReducer({ token: null, user: null } as AuthState, setUser(user));

    expect(state.user).toEqual(user);
  });

  test('should handle logout', () => {
    localStorage.setItem('auth_token', 'token');
    localStorage.setItem('refresh_token', 'refresh');

    const state = authReducer(
      {
        token: 'token',
        user: { id: '1', name: 'A', email: 'a@test.com', role: 'user' },
      },
      logout(),
    );

    expect(state.token).toBeNull();
    expect(state.user).toBeNull();
    expect(localStorage.getItem('auth_token')).toBeNull();
    expect(localStorage.getItem('refresh_token')).toBeNull();
  });
});
