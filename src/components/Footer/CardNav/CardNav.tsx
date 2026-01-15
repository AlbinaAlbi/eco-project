import { NavLink } from 'react-router-dom';
import { BlockFooterProps } from '../../../hooks/useBlockFooter';
import styles from './CardNav.module.scss';

interface CardNavProps {
  inform: BlockFooterProps;
}

export const CardNav = ({ inform }: CardNavProps) => {
  const { title, navItems } = inform;

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.itemsBlock}>
        {navItems.map((item) =>
          item.isAnchor ? (
            <a key={item.path} href={item.path}>
              <h5>{item.label}</h5>
            </a>
          ) : (
            <NavLink key={item.path} to={item.path}>
              <h5>{item.label}</h5>
            </NavLink>
          ),
        )}
      </div>
    </div>
  );
};
