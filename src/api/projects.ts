import api from './api';

export const fetchProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const fetchProjectById = async (id: string) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};
