import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styles from './ProjectDetailPage.module.scss';
import { HeaderProject } from './HeaderProject';
import { useEffect } from 'react';
import { fetchProjectByIdThunk } from '../../store/slices/ProjectsSlice/projectsSlice';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { projects, loading, error } = useAppSelector((state) => state.projects);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (!project && id) {
      dispatch(fetchProjectByIdThunk(id));
    }
  }, [dispatch, id, project]);

  if (loading) return <p>Загрузка проекта...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (!project) return <p>Проект не найден</p>;

  return (
    <div className={styles.container}>
      <HeaderProject project={project} />
    </div>
  );
};
