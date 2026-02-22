import axios, { AxiosError } from 'axios';

interface ErrorResponse {
  message?: string;
}

export const handleApiError = (error: AxiosError<ErrorResponse>) => {
  if (!error.response) {
    console.error('Network error:', error.message);
    return { status: 0, message: 'Network error. Try again later.' };
  }

  const { status, data } = error.response;
  const message = data?.message ?? error.message ?? 'Unknown error';

  return { status, message };
};

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(handleApiError(error)),
);
