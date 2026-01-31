import { Link } from 'react-router-dom';
import { ButtonProps } from '../../types/ButtonProps';
import styles from './Button.module.scss';
import { useSidebar } from '../../context/SidebarContext';

export const Button = ({
  text,
  color = 'green',
  to,
  onClick,
  buttonWidth,
  backgroundColor = true,
}: ButtonProps) => {
  const classNameContainer = `${styles.container}`;
  const classNameButton = `textButton ${backgroundColor ? styles[color] : styles.noneBackground}`;
  const { closeSidebar } = useSidebar();

  if (to) {
    return (
      <Link to={to} className={classNameContainer}>
        <button className={classNameButton} onClick={closeSidebar} style={{ width: buttonWidth }}>
          {text}
        </button>
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
