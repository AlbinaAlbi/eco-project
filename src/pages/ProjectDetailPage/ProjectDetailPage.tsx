import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styles from './ProjectDetailPage.module.scss';
import { HeaderProject } from './HeaderProject';
import { useEffect } from 'react';
import {
  fetchProjectByIdThunk,
  fetchProjectsThunk,
} from '../../store/slices/ProjectsSlice/projectsSlice';
import { DescriptionDetail } from './DescriptionDetail';
import { OurGoals } from './OurGoals';
import { ResultsProject } from './ResultsProject';
import { ReadyToHelp } from './ReadyToHelp /ReadyToHelp';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { projects, currentProject, loading, error } = useAppSelector((state) => state.projects);

  const project = projects.find((p) => p.id === id);

  const text = [
    'The Carpathian Forest Restoration initiative focuses on bringing new life to mountain areas that have been heavily affected by deforestation, storms, and soil degradation. Together with local communities, environmental organizations, and volunteers from across Ukraine, we aim to restore native forest ecosystems and strengthen biodiversity in one of the country’s most valuable natural regions.',
    'Our team plants young trees, removes invasive species, supports natural regeneration, and monitors soil and climate conditions to ensure long-term forest health. Each planting season brings measurable environmental impact — improved air quality, stabilized slopes, and expanded habitats for wildlife.',
    'Beyond the ecological benefits, the project creates opportunities for people of all ages to reconnect with nature, learn sustainable practices, and contribute to preserving the Carpathian region for future generations.',
  ];

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
      <DescriptionDetail text={text} />
      <OurGoals />
      <ResultsProject />
      <ReadyToHelp />
    </div>
  );
};
