import { TakeAction } from '../../components/TakeAction';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <TakeAction />
    </div>
  );
};
