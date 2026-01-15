import styles from './EmailInput.module.scss';
import arrow from '../../../imgs/Arrow.svg';
import { useLanguage } from '../../../context/LanguageContext';

export const EmailInput = () => {
  const { t } = useLanguage();

  return (
    <form className={styles.container}>
      <label className="textSecondary" htmlFor="email">
        {t('join')}
      </label>

      <div className={styles.inputWrapper}>
        <input
          className="textBody"
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder={t('placeholder')}
          required
        />
        <button type="submit">
          <img src={arrow} alt="Email arrow" />
        </button>
      </div>
    </form>
  );
};
