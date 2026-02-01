import styles from './HelpNow.module.scss';
import { StartYourProject } from './StartYourProject';
import { TransparentProcess } from './TransparentProcess';

export const HelpNow = () => {
  return (
    <div className={styles.container}>
      <StartYourProject />
      <div className={styles.transparent}>
        <TransparentProcess />
      </div>
    </div>
  );
};
