import { Link } from 'react-router-dom';
import { ButtonProps } from '../../types/ButtonProps';
import styles from './Button.module.scss';
import { useSidebar } from '../../context/SidebarContext';

export const Button = ({ text, color = 'green', to, onClick, buttonWidth }: ButtonProps) => {
  const classNameContainer = `${styles.container}`;
  const classNameButton = `textButton ${styles[color]}`;
  const { closeSidebar } = useSidebar();

  if (to) {
    return (
      <Link to={to} className={classNameContainer}>
        {text}
      </Link>
    );
  }

  return (
    <div className={classNameContainer}>
      <button className={classNameButton} onClick={closeSidebar} style={{ width: buttonWidth }}>
        {text}
      </button>
    </div>
  );
};
