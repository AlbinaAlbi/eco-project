import { useLanguage } from '../../context/LanguageContext';
import styles from './Agree.module.scss';
import check from '../../imgs/check.svg';

interface AgreeProps {
  agree: boolean;
  setAgree: (a: boolean) => void;
}

export const Agree = ({ agree, setAgree }: AgreeProps) => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${agree ? styles.active : ''} ${styles.button}`}
        onClick={() => setAgree(!agree)}
      >
        {agree && <img src={check} alt="Check" />}
      </button>
      <div className="textSecondary">{t('agree')}</div>
    </div>
  );
};
