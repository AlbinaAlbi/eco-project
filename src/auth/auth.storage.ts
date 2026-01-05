const TOKEN_KEY = 'auth_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const saveRefreshToken = (token: string) => localStorage.setItem(REFRESH_TOKEN_KEY, token);

export const getRefreshToken = (): string | null => localStorage.getItem(REFRESH_TOKEN_KEY);

export const clearRefreshToken = () => localStorage.removeItem(REFRESH_TOKEN_KEY);

export const clearAuth = () => {
  clearToken();
  clearRefreshToken();
};
