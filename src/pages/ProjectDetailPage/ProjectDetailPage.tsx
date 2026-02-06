import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styles from './ProjectDetailPage.module.scss';
import { useEffect } from 'react';
import { fetchProjectByIdThunk } from '../../store/slices/ProjectsSlice/projectsSlice';
import { DescriptionDetail } from './DescriptionDetail';
import { OurGoals } from './OurGoals';
import { ResultsProject } from './ResultsProject';
import { ReadyToHelp } from './ReadyToHelp /ReadyToHelp';
import { Loader } from '../../components/Loader';
import { ErrorElement } from '../../components/ErrorElement';
import { HeaderProject } from './HeaderProject';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { currentProject, loading, error } = useAppSelector((state) => state.projects);

  console.log(currentProject);
  useEffect(() => {
    if (id) {
      dispatch(fetchProjectByIdThunk(id));
    }
  }, [dispatch, id]);

  if (loading) return <Loader text="Загрузка проектов..." duration={1000} />;
  if (error) return <ErrorElement message={error} />;
  if (!currentProject) return <p>Проект не знайдено</p>;

  return (
    <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
      <HeaderProject projectDetail={currentProject} />
      <DescriptionDetail text={currentProject.fullDescription} />
      <OurGoals projectGoals={currentProject.goals} />
      <ResultsProject />
      <ReadyToHelp />
    </div>
  );
};
