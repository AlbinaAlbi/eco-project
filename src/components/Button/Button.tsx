import { useNavigate } from 'react-router-dom';
import styles from './Button.module.scss';
import { useSidebar } from '../../context/SidebarContext';
import { scrollToTop } from '../../utils/scrollToTop';

type ButtonProps = {
  text: string;
  color?: 'green' | 'white';
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonWidth?: string;
  backgroundColor?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
};

export const Button = ({
  text,
  color = 'green',
  to,
  onClick,
  buttonWidth,
  backgroundColor = true,
  type = 'button',
  isDisabled = true,
}: ButtonProps) => {
  const classNameContainer = `${styles.container}`;
  const classNameButton = `textButton ${backgroundColor ? styles[color] : styles.noneBackground}`;
  const { closeSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);

    if (type !== 'submit') {
      e.preventDefault();
    }

    if (to) {
      navigate(to);
      scrollToTop();
      closeSidebar();
    }
  };

  return (
    <div className={classNameContainer}>
      <button
        className={classNameButton}
        onClick={handleClick}
        style={{ width: buttonWidth }}
        type={type}
        disabled={!isDisabled}
      >
        {text}
      </button>
    </div>
  );
};
