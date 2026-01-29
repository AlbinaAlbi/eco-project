import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styles from './ProjectDetailPage.module.scss';
import { HeaderProject } from './HeaderProject';
import { useEffect } from 'react';
import {
  fetchProjectByIdThunk,
  fetchProjectsThunk,
} from '../../store/slices/ProjectsSlice/projectsSlice';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { projects, currentProject, loading, error } = useAppSelector((state) => state.projects);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (!projects.length) {
      dispatch(fetchProjectsThunk());
    }
    if (id && !currentProject) {
      dispatch(fetchProjectByIdThunk(id));
    }
  }, [dispatch, id, projects.length, currentProject]);

  if (loading) return <p>Загрузка проекта...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (!project || !currentProject) return <p>Проект не найден</p>;

  return (
    <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
      <HeaderProject project={project} projectDetail={currentProject} />
    </div>
  );
};
