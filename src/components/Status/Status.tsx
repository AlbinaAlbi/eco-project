import styles from './Status.module.scss';
import statusImg from '../../imgs/status.svg';
import { useLanguage } from '../../context/LanguageContext';

interface StatusProps {
  status: string;
}

export const Status = ({ status }: StatusProps) => {
  const { t } = useLanguage();
  const isStatus = status === 'ACTIVE' ? t('open') : t('closed');

  return (
    <div className={styles.container}>
      <img src={statusImg} alt="Status img" />
      <h5>{isStatus}</h5>
    </div>
  );
};
