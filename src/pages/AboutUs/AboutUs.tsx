import { HowItWorks } from '../HomePage/HowItWorks';
import styles from './AboutUs.module.scss';
import { Goals } from './Goals/Goals';
import { Involved } from './Involved';
import { Results } from './Results';
import { WhoWeAre } from './WhoWeAre';

export const AboutUs = () => {
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
