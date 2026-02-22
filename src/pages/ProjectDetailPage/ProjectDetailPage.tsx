import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styles from './ProjectDetailPage.module.scss';
import { useEffect } from 'react';
import {
  clearCurrentProject,
  fetchProjectByIdThunk,
} from '../../store/slices/ProjectsSlice/projectsSlice';
import { DescriptionDetail } from './DescriptionDetail';
import { OurGoals } from './OurGoals';
import { ResultsProject } from './ResultsProject';
import { ReadyToHelp } from './ReadyToHelp /ReadyToHelp';
import { Loader } from '../../components/Loader';
import { ErrorElement } from '../../components/ErrorElement';
import { HeaderProject } from './HeaderProject';
import { useLanguage } from '../../context/LanguageContext';
import { scrollToTop } from '../../hooks/scrollToTop';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { currentProject, loading, error } = useAppSelector((state) => state.projects);
  const { t } = useLanguage();

  useEffect(() => {
    scrollToTop();

    if (id) {
      dispatch(fetchProjectByIdThunk(id));
    }

    return () => {
      dispatch(clearCurrentProject());
    };
  }, [dispatch, id]);

  if (loading) return <Loader text={`${t('projectsloading')}...`} duration={1000} />;
  if (error) return <ErrorElement />;
  if (!currentProject) return <p>{t('projectNotFound')}</p>;

  return (
    <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
      <HeaderProject projectDetail={currentProject} />
      <DescriptionDetail text={currentProject.fullDescription} />
      <OurGoals projectGoals={currentProject.goals} />
      <ResultsProject />
      <ReadyToHelp
        title={currentProject.readyToHelpTitle}
        description={currentProject.readyToHelpDescription}
      />
    </div>
  );
};
