import { useLanguage } from '../../context/LanguageContext';
import styles from './VolunteersNeeded.module.scss';

interface VolunteersNeededProps {
  count: number;
}

export const VolunteersNeeded = ({ count }: VolunteersNeededProps) => {
  const { t } = useLanguage();

  return (
    <h5>
      <span className={styles.grayText}>{t('volunteersNeeded')}</span>{' '}
      <span className={styles.greenText}>{count}</span>
    </h5>
  );
};
