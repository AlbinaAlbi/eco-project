import { filterProjects } from '../hooks/filterProjects';
import { SelectedFilters } from '../types/SelectedFilters';
import { createProject } from './factories/project.factory';

jest.mock('../utils/useFilter', () => ({
  CATEGORY_MAP: {
    frontend: 'FE',
    backend: 'BE',
  },
  CITY_MAP: {
    kyiv: 'KY',
    lviv: 'LV',
  },
  STATUS_MAP: {
    active: 'A',
    completed: 'C',
  },
}));

const projects = [
  createProject({
    id: 1,
    title: 'Frontend App',
    category: 'Frontend',
    city: 'Kyiv',
    status: 'Active',
  }),
  createProject({
    id: 2,
    title: 'Backend API',
    category: 'Backend',
    city: 'Lviv',
    status: 'Completed',
  }),
];

