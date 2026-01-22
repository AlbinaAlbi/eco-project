import { useEffect, useMemo, useState } from 'react';
import { ExploreProjects } from '../../components/ExploreProjects';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice/projectsSlice';
import styles from './ProjectsPage.module.scss';
import { SelectedFilters } from '../../types/SelectedFilters';
import { FilterElement } from '../../components/FilterElement';
import { ProjectsList } from '../../components/ProjectsList';
import { filterProjects } from '../../hooks/filterProjects';

export const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { projects, loading, error } = useAppSelector((state) => state.projects);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: null,
    location: null,
    status: null,
    search: '',
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);

  useEffect(() => {
    dispatch(fetchProjectsThunk());
  }, [dispatch]);

  const filteredProjects = useMemo(
    () => filterProjects(projects, selectedFilters),
    [projects, selectedFilters],
  );

  if (loading) return <p>Загрузка проектов...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={`${styles.container}`}>
      <ExploreProjects />
      <FilterElement selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <ProjectsList
        projects={filteredProjects}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
