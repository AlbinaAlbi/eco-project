import { Link, useNavigate } from 'react-router-dom';
import { ButtonProps } from '../../types/ButtonProps';
import styles from './Button.module.scss';
import { useSidebar } from '../../context/SidebarContext';
import { scrollToTop } from '../../hooks/scrollToTop';

export const Button = ({
  text,
  color = 'green',
  to,
  onClick,
  buttonWidth,
  backgroundColor = true,
  type = 'button',
}: ButtonProps) => {
  const classNameContainer = `${styles.container}`;
  const classNameButton = `textButton ${backgroundColor ? styles[color] : styles.noneBackground}`;
  const { closeSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleClick = () => {
    scrollToTop();
    closeSidebar();
    console.log('navigate to:', to);

    if (to) {
      navigate(to);
    }
  };

  return (
    <div className={classNameContainer}>
      <button
        className={classNameButton}
        onClick={handleClick}
        style={{ width: buttonWidth }}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};
