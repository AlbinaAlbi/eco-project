import { useLanguage } from '../../../../context/LanguageContext';
import styles from './Volunteer.module.scss';

export const Volunteer = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <button className={`textButton`}>{t('volunteer')}</button>
    </div>
  );
};
