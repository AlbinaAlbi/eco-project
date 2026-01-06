import styles from './BurgerMenu.module.scss';
import menuImg from '../../../../imgs/Burger.svg';
import closeImg from '../../../../imgs/Close.svg';
import { useSidebar } from '../../../../context/SidebarContext';

export const BurgerMenu = () => {
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  const toggleSidebar = () => {
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return (
    <div className={styles.container} onClick={toggleSidebar}>
      <img src={isOpen ? closeImg : menuImg} alt="Burger Menu" />
    </div>
  );
};
