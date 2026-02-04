import styles from './ErrorElement.module.scss';

interface ErrorElementProps {
  message?: string;
}

export const ErrorElement = ({ message = 'Щось пішло не так...' }: ErrorElementProps) => {
  return (
    <div className={styles.errorWrapper}>
      <h1 className={styles.title}>Ой!</h1>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
