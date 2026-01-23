import styles from './AboutUs.module.scss';
import { Goals } from './Goals/Goals';
import { WhoWeAre } from './WhoWeAre';

export const AboutUs = () => {
  return (
    <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
      <WhoWeAre />
      <Goals />
    </div>
  );
};
