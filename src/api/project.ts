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
  const response = await api.post('/projects', project, {
    headers: { 'Content-Type': 'application/json' },
  });

  return response.data;
};

export const handleSubm = async (project: ProjectCreate) => {
  const res = await fetch('http://localhost:8080/api/v1/projects/project-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Помилка запиту: ${res.status} ${text}`);
  }

  const text = await res.text();

  let result;
  try {
    result = text ? JSON.parse(text) : { message: 'Запит відправлений (буз відповіді)' };
  } catch {
    result = { message: 'Відповіть не є JSON' };
  }

  return result;
};
