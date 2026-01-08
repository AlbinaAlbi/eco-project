import styles from './Icon.module.scss';
import icon from '../../../imgs/EcoLeaf..svg';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../../context/SidebarContext';

export const Icon = () => {
  const { closeSidebar } = useSidebar();

  return (
    <NavLink to="/" className={styles.container} onClick={closeSidebar}>
      <img src={icon} alt="Icon" />
    </NavLink>
  );
};
