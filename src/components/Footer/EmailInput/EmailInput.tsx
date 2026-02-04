import styles from './EmailInput.module.scss';
import arrow from '../../../imgs/Arrow.svg';
import { useLanguage } from '../../../context/LanguageContext';
import { useEffect, useState } from 'react';

export const EmailInput = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={status === 'loading'}>
          <img src={arrow} alt="Email arrow" />
        </button>
      </div>

      <div className={`textSecondary ${styles.statusMessage}`}>
        {status === 'loading' && <span className={styles.loading}>{t('sending')}...</span>}
        {status === 'success' && <span className={styles.success}>{t('received')}</span>}
        {status === 'error' && <span className={styles.error}>{t('errorSending')}</span>}
      </div>
    </form>
  );
};
