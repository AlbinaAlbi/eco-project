import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.scss";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/login", label: "Login" },
];

export const NavLinks = () => {
  return (
    <nav className={styles.container}>
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} className='textBody'>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};


