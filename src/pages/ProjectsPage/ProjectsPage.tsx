import { useEffect } from 'react';
import { ExploreProjects } from '../../components/ExploreProjects';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice/projectsSlice';
import styles from './ProjectsPage.module.scss';

export const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const { projects, loading, error } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjectsThunk());
  }, [dispatch]);

  if (loading) return <p>Загрузка проектов...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  return (
    <div className={`${styles.container}`}>
      <ExploreProjects />
    </div>
  );
};
