import { useLanguage } from '../../../../context/LanguageContext';
import styles from './Explore.module.scss';

export const Explore = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <button className={`textButton`}>{t('volunteer')}</button>
    </div>
  );
};
