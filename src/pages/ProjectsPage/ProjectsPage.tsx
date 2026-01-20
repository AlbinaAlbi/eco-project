import { useEffect, useState } from 'react';
import { ExploreProjects } from '../../components/ExploreProjects';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice/projectsSlice';
import styles from './ProjectsPage.module.scss';
import { SelectedFilters } from '../../types/SelectedFilters';
import { FilterElement } from '../../components/FilterElement';
import { ProjectsList } from '../../components/ProjectsList';

export const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.projects);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: null,
    location: null,
    status: null,
    search: '',
  });
  console.log(selectedFilters);

  useEffect(() => {
    dispatch(fetchProjectsThunk());
  }, [dispatch]);

  if (loading) return <p>Загрузка проектов...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={`${styles.container}`}>
      <ExploreProjects />
      <FilterElement selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <ProjectsList />
    </div>
  );
};
