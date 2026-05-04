import { api } from './api';

export const sendContact = async (data: {
  name: string;
  email: string;
  message: string;
  city: string;
}) => {
  const response = await api.post('/contacts', data);
  return response.data;
};
