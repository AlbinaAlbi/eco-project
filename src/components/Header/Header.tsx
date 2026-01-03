import styles from './Header.module.scss';
import { Icon } from './Icon';
import { NavLinks } from './NavLinks';

export const Header = () => (
  <div className={styles.containerContentPadding}>
    <div className={styles.container}>
      <Icon />

      <NavLinks />

      <div className={styles.icon}>buttons</div>
    </div>
  </div>
);
