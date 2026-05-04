import { ErrorElement } from '../../components/ErrorElement';
import { Loader } from '../../components/Loader';
import { useAppSelector } from '../../hooks/hooks';
import { useStepsList } from '../../hooks/useStepsList';
import { HowItWorks } from '../HomePage/HowItWorks';
import styles from './AboutUs.module.scss';
import { Goals } from './Goals/Goals';
import { Involved } from './Involved';
import { Results } from './Results';
import { WhoWeAre } from './WhoWeAre';

export const AboutUs = () => {
  const { loading, error } = useAppSelector((state) => state.projects);
  const stepsList = useStepsList();

  if (loading) return <Loader />;
  if (error) return <ErrorElement />;

  return (
    <div className={styles.container}>
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <WhoWeAre />
        <Goals />
        <HowItWorks stepsList={stepsList} />
        <Results />
      </div>
      <Involved />
    </div>
  );
};
