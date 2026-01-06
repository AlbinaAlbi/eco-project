import { useSidebar } from '../../context/SidebarContext';
import { Explore } from '../Header/Menu/Explore';
import { Language } from '../Header/Menu/Language';
import { NavLinks } from '../Header/NavLinks';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <NavLinks />
        <Explore />
        <Language />
      </div>
    </div>
  );
};
