import { NavLink } from 'react-router-dom';

export const Header = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);
