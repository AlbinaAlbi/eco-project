import { BackButton } from '../BackButton';
import styles from './Header.module.scss';
import { Icon } from './Icon';
import { Menu } from './Menu';
import { NavLinks } from './NavLinks';

export const Header = () => (
  <div className={styles.containerContentPadding}>
    <div className={styles.box}>
      <div className={styles.container}>
        <Icon />

        <div className="desktopOnly">
          <NavLinks />
        </div>

        <Menu />
      </div>
      <div className="containerMaxWidth">
        <BackButton />
      </div>
    </div>
  </div>
);
