import { Project } from '../types/Project';
import { SelectedFilters } from '../types/SelectedFilters';
import { CATEGORY_MAP, CITY_MAP, STATUS_MAP } from './useFilter';

export const filterProjects = (projects: Project[], filters: SelectedFilters) => {
  return projects.filter((project) => {
    const categoryCode = CATEGORY_MAP[project.category.toLowerCase()];
    const cityCode = CITY_MAP[project.city.toLowerCase()];
    const statusCode = STATUS_MAP[project.status.toLowerCase()];

    console.log(filters.status, project.status);

    if (filters.category && categoryCode !== filters.category) return false;
    if (filters.location && cityCode !== filters.location) return false;
    if (filters.status && statusCode !== filters.status) return false;
    if (filters.search && !project.title.toLowerCase().includes(filters.search.toLowerCase()))
      return false;

    return true;
  });
};
