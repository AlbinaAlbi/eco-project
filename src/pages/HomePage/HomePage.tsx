import { FeaturedProjects } from '../../components/FeaturedProjects';
import { HowItWorks } from './HowItWorks';
import { Mission } from './Mission';
import { OurStatistics } from '../../components/OurStatistics';
import { TakeAction } from './TakeAction';
import styles from './HomePage.module.scss';
import { FAQ } from './FAQ';
import { StartInitiative } from '../../components/StartInitiative';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice/projectsSlice';
import { useEffect } from 'react';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { projects, loading, error } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjectsThunk());
  }, [dispatch]);

  if (loading) return <p>Загрузка проектов...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <TakeAction />
        <Mission />
      </div>
      <HowItWorks />
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <FeaturedProjects projects={projects} />
      </div>
      <OurStatistics />

      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <FAQ />
      </div>

      <StartInitiative />
    </div>
  );
};
