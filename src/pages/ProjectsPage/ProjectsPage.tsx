import { useEffect, useMemo, useState } from 'react';
import { ExploreProjects } from '../../components/ExploreProjects';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice/projectsSlice';
import styles from './ProjectsPage.module.scss';
import { SelectedFilters } from '../../types/SelectedFilters';
import { FilterElement } from '../../components/FilterElement';
import { ProjectsList } from '../../components/ProjectsList';
import { filterProjects } from '../../hooks/filterProjects';
import { FindAProject } from './FindAProject';
import { Loader } from '../../components/Loader';
import { ErrorElement } from '../../components/ErrorElement';

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

  console.log(filteredProjects);

  if (loading) return <Loader />;
  if (error) return <ErrorElement />;

  return (
    <div className={styles.container}>
      <ExploreProjects />
      <FilterElement selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <ProjectsList
        projects={filteredProjects}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <FindAProject />
    </div>
  );
};
