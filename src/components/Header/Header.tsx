import styles from './Header.module.scss';
import { Icon } from './Icon';
import { Menu } from './Menu';
import { NavLinks } from './NavLinks';

export const Header = () => (
  <div className={styles.containerContentPadding}>
    <div className={styles.container}>
      <Icon />

      <div className="desktopOnly">
        <NavLinks />
      </div>

      <Menu />
    </div>
  </div>
);
