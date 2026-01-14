import { FeaturedProjects } from '../../components/FeaturedProjects';
import { HowItWorks } from '../../components/HowItWorks';
import { Mission } from '../../components/Mission';
import { OurStatistics } from '../../components/OurStatistics';
import { TakeAction } from '../../components/TakeAction';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <TakeAction />
        <Mission />
      </div>
      <HowItWorks />
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <FeaturedProjects />
      </div>
      <OurStatistics />
    </div>
  );
};
