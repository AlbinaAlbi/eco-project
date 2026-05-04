import { Project } from '../types/ProjectType';
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
  const response = await api.post('/projects', project, {
    headers: { 'Content-Type': 'application/json' },
  });

  return response.data;
};

export const handleSubm = async (project: ProjectCreate) => {
  const response = await api.post('/projects/project-request', project);
  return response.data;
};
