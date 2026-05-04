import styles from './EmailInput.module.scss';
import arrow from '../../../imgs/Arrow.svg';
import { useLanguage } from '../../../context/LanguageContext';
import { useEffect, useState } from 'react';

export const EmailInput = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!success && !error) return;

    const timer = setTimeout(() => {
      setSuccess(false);
      setError('');
    }, 2500);

    return () => clearTimeout(timer);
  }, [success, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) {
      setError('');
    }

    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError(t('invalidEmail'));
      return;
    }

    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      setSuccess(true);
      setEmail('');
    } catch {
      setError(t('errorSending'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
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
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" disabled={loading}>
          <img src={arrow} alt="Email arrow" />
        </button>
      </div>

      <div className={`textSecondary ${styles.statusMessage}`}>
        {loading && <span className={styles.loading}>{t('sending')}...</span>}
        {success && <span className={styles.success}>{t('received')}</span>}
        {error && <span className={styles.error}>{t('errorSending')}</span>}
      </div>
    </form>
  );
};
