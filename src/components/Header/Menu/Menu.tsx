import styles from './Menu.module.scss';
import { BurgerMenu } from './BurgerMenu';
import { Explore } from './Explore';
import { Language } from './Language';

export const Menu = () => {
  return (
    <div className={styles.container}>
      <div className="desktopOnly">
        <Language />
      </div>
      <div className="tabletAndMore">
        <Explore />
      </div>
      <BurgerMenu />
    </div>
  );
};
