import styles from './Status.module.scss';
import statusImg from '../../imgs/status.svg';

interface StatusProps {
  status: string;
}

export const Status = ({ status }: StatusProps) => {
  const isStatus = status === 'ACTIVE' ? 'Open' : 'Close';

  return (
    <div className={styles.container}>
      <img src={statusImg} alt="Status img" />
      <h5>{isStatus} for volunteers</h5>
    </div>
  );
};
