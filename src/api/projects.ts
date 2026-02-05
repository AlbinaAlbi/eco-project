import { Project } from '../types/Project';
import { ProjectCreate } from '../types/ProjectCreate';
import { api } from './api';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>('/projects');

  return response.data.map((p) => ({
    ...p,
    id: p.id,
  }));
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  const response = await api.get<Project>(`/projects/${id}`);
  return response.data;
};

export const createProject = async (project: ProjectCreate) => {
  const formData = new FormData();

  Object.entries(project).forEach(([key, value]) => {
    if (value !== null && value !== undefined) formData.append(key, value as any);
  });

  const response = await api.post('/projects', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};
