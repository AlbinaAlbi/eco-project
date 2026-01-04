// src/api/api.ts
import axios from 'axios';
import { getToken } from '../auth/auth.storage';
import { refreshAccessToken, logout } from '../auth/auth.api';

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  };

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

      logout();
    }

    return Promise.reject(error);
  }
);
