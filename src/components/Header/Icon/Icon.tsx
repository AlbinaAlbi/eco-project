import styles from './Icon.module.scss';
import icon from '../../../imgs/EcoLeaf..svg'

export const Icon = () => (
  <div className={styles.container}>
    <img src={icon} alt="Icon" />
  </div>
);
