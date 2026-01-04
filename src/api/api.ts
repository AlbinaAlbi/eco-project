import axios from 'axios';
import { store } from '../store/store';
import { refreshAccessToken } from '../auth/auth.api';
import { logout as logoutRedux } from '../store/slices/authSlice';

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(config => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();

      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      }

      store.dispatch(logoutRedux());
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);
