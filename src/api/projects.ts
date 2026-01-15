import { Project } from '../types/Project';
import { api } from './api';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>('/projects');
  return response.data.map((p) => ({ ...p, id: p.id.toString() }));
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  const response = await api.get<Project>(`/projects/${id}`);
  return { ...response.data, id: response.data.id.toString() };
};
