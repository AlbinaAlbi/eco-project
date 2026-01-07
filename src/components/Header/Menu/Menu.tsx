import styles from './Menu.module.scss';
import { BurgerMenu } from './BurgerMenu';
import { Language } from './Language';
import { Volunteer } from './Volunteer';

export const Menu = () => {
  return (
    <div className={styles.container}>
      <div className="desktopOnly">
        <Language />
      </div>
      <div className="tabletAndMore">
        <Volunteer />
      </div>
      <BurgerMenu />
    </div>
  );
};
