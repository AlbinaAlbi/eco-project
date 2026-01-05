import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { store } from '../store/store';
import { refreshAccessToken } from '../auth/auth.api';
import { logout as logoutRedux } from '../store/slices/AuthSlice/authSlice';
import { setError } from '../store/slices/ErrorSlise/errorSlice';

interface ErrorResponse {
  message?: string;
}

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ErrorResponse>) => {
    const originalRequest: (AxiosRequestConfig & { _retry?: boolean }) | undefined = error.config;

    if (!error.response) {
      console.error('Network error:', error.message);
      return Promise.reject({ status: 0, message: 'Network error. Try again later.' });
    }

    const { status, data } = error.response;

    if (status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshAccessToken();
        if (newToken && originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (err) {
        store.dispatch(logoutRedux());
        window.location.href = '/login';
        return Promise.reject({ status: 401, message: 'Unauthorized' });
      }
    }

    const message = data?.message ?? error.message ?? 'Unknown error';
    store.dispatch(setError(message));

    return Promise.reject({ status, message });
  },
);
