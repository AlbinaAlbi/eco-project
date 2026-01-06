import { useLanguage } from '../../../../context/LanguageContext';
import styles from './Language.module.scss';

export const Language = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.en} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <div className={styles.line}></div>
      <button
        className={`${styles.en} ${language === 'ua' ? styles.active : ''}`}
        onClick={() => setLanguage('ua')}
      >
        UA
      </button>
    </div>
  );
};
