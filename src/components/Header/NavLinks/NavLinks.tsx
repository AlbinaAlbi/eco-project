import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';
import { useLanguage } from '../../../context/LanguageContext';
import { useSidebar } from '../../../context/SidebarContext';

export const NavLinks = () => {
  const { t } = useLanguage();
  const { closeSidebar } = useSidebar();

  const links = [
    { to: '/projects', label: t('projects') },
    { to: '/about', label: t('about') },
    { to: '/contacts', label: t('contacts') },
  ];

  return (
    <nav className={styles.container}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          onClick={closeSidebar}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
