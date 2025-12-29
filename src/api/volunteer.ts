import api from './api';

export const volunteer = async (projectId: string) => {
  const response = await api.post('/volunteer', { projectId });
  return response.data;
};
