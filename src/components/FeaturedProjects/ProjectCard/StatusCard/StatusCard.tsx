import styles from './StatusCard.module.scss';

interface StatusProps {
  status: 'Active' | 'Inactive';
}

export const StatusCard = ({ status }: StatusProps) => {
  const isActive = status === 'Active';

  return (
    <div className={`textSecondary ${styles.status}`}>
      <div
        className={styles.ellipse}
        style={{ backgroundColor: isActive ? '#A4D65E' : '#FF0000' }}
      ></div>
      {status}
    </div>
  );
};
