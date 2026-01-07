import { Link } from 'react-router-dom';
import { ButtonProps } from '../../types/ButtonProps';
import styles from './Button.module.scss';

export const Button = ({ text, color = 'green', to, onClick }: ButtonProps) => {
  const classNameContainer = `${styles.container}`;
  const classNameButton = `textButton ${styles[color]}`;

  if (to) {
    return (
      <Link to={to} className={classNameContainer}>
        {text}
      </Link>
    );
  }

  return (
    <div className={classNameContainer}>
      <button className={classNameButton}>{text}</button>
    </div>
  );
};
