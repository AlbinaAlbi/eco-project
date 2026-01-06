import styles from './BurgerMenu.module.scss';
import menuImg from '../../../../imgs/Burger.svg';

export const BurgerMenu = () => {
  return (
    <div className={styles.container}>
      <img src={menuImg} alt="Burger Menu" />
    </div>
  );
};
