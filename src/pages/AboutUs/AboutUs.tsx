import styles from './AboutUs.module.scss';
import { WhoWeAre } from './WhoWeAre';

export const AboutUs = () => {
  return (
    <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
      <WhoWeAre />
    </div>
  );
};
