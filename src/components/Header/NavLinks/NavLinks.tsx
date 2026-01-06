import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About us' },
  { to: '/contacts', label: 'Contacts' },
];

export const NavLinks = () => {
  return (
    <nav className={styles.container}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `textBody ${isActive ? styles.active : ''}`}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};
