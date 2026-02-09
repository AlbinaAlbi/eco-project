import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Agree.module.scss';
import check from '../../imgs/check.svg';

export const Agree = () => {
  const { t } = useLanguage();
  const [agree, setAgree] = useState(false);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${agree ? styles.active : ''} ${styles.button}`}
        onClick={() => setAgree((e) => !e)}
      >
        {agree && <img src={check} alt="Check" />}
      </button>
      <div className="textSecondary">{t('agree')}</div>
    </div>
  );
};
