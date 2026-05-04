import { useLanguage } from '../../../context/LanguageContext';
import styles from './BottomFooter.module.scss';

export const BottomFooter = () => {
  const { t } = useLanguage();

  return (
    <div className={`textSecondary ${styles.container}`}>
      <div className={styles.termsAndPrivacy}>
        <div>{t('terms')}</div>
        <div>{t('privacy')}</div>
      </div>
      <div className={styles.rights}>{t('rights')}</div>
    </div>
  );
};
