import styles from './Loader.module.scss';
import React, { useEffect, useState } from 'react';

interface LoaderProps {
  text?: string;
  duration?: number;
}

export const Loader = ({ text = 'Загрузка...', duration = 1000 }: LoaderProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner} />
      <p>{text}</p>
    </div>
  );
};
