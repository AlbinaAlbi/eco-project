import { ErrorElement } from '../../components/ErrorElement';
import { Loader } from '../../components/Loader';
import { useAppSelector } from '../../hooks/hooks';
import { HowItWorks } from '../HomePage/HowItWorks';
import styles from './AboutUs.module.scss';
import { Goals } from './Goals/Goals';
import { Involved } from './Involved';
import { Results } from './Results';
import { WhoWeAre } from './WhoWeAre';

export const AboutUs = () => {
  const { loading, error } = useAppSelector((state) => state.projects);

  if (loading) return <Loader />;
  if (error) return <ErrorElement message={error} />;

  return (
    <div className={styles.container}>
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <WhoWeAre />
        <Goals />
        <HowItWorks />
        <Results />
      </div>
      <Involved />
    </div>
  );
};
