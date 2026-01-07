import { useSidebar } from '../../context/SidebarContext';
import { Language } from '../Header/Menu/Language';
import { BecomeAVolunteer } from '../Buttons/BecomeAVolunteer';
import { NavLinks } from '../Header/NavLinks';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.container}>
          <NavLinks />
          <BecomeAVolunteer />
          <Language />
        </div>
      </div>
    </div>
  );
};
