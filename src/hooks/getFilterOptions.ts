import { Project } from '../types/Project';

export const getFilterOptions = (projects: Project[]) => {
  const statusOptions = Array.from(
    projects.reduce((acc, project) => {
      const key = project.status;
      if (!acc.has(key)) acc.set(key, 0);
      acc.set(key, acc.get(key)! + 1);
      return acc;
    }, new Map<string, number>()),
  ).map(([status, count]) => ({ label: `${status} (${count})`, value: status }));

  const cityOptions = Array.from(
    projects.reduce((acc, project) => {
      const key = project.city;
      if (!acc.has(key)) acc.set(key, 0);
      acc.set(key, acc.get(key)! + 1);
      return acc;
    }, new Map<string, number>()),
  ).map(([city, count]) => ({ label: `${city} (${count})`, value: city }));

  return { statusOptions, cityOptions };
};
