// src/api/auth.api.ts
import { api } from '../api/api';
import { saveToken, getRefreshToken, clearAuth, saveRefreshToken } from './auth.storage';

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });

  saveToken(response.data.accessToken);        // короткоживущий JWT

  saveRefreshToken(response.data.refreshToken); // долгоживущий refresh token
  
  return response.data.user;
};

export const logout = () => {
  clearAuth();
  window.location.href = '/login';
};

export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  
  if (!refreshToken) {
    return null
  };

  try {
    const response = await api.post('/auth/refresh', { refreshToken });

    saveToken(response.data.accessToken);
    
    return response.data.accessToken;
  } catch (err) {
    logout(); // если refresh не удался, разлогиниваем
    
    return null;
  }
};
