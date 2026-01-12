import { Mission } from '../../components/Mission';
import { TakeAction } from '../../components/TakeAction';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <TakeAction />
      <Mission />
    </div>
  );
};
