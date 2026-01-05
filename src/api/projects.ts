import { Project } from '../types/Project';
import { api } from './api';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>('/projects');

  return response.data;
};

export const fetchProjectById = async (id: number): Promise<Project> => {
  const response = await api.get<Project>(`/projects/${id}`);

  return response.data;
};
