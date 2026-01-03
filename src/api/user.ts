import { api } from "./api";

export const getProfile = async () => {
  const response = await api.get('/me');
  console.log(response.data);
};

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', response.data.token);
  console.log(response.data.user);
};