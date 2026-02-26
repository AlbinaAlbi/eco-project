import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './FormForBecome.module.scss';
import { sendContact } from '../../api/contact';
import { Button } from '../Button';
import { FormData } from '../../types/FormData';

export const FormForBecome = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    city: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) {
      setError('');
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    if (form.name.trim().length < 2) {
      setError(t('nameMinLength'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError(t('invalidEmail'));
      return;
    }

    if (form.city.trim().length < 2) {
      setError(t('cityMinLength'));
      return;
    }

    if (form.message.trim().length < 10) {
      setError(t('messageMinLength'));
      return;
    }

    try {
      await sendContact(form);
      setSuccess(true);
      setForm({ name: '', email: '', city: '', message: '' });

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError(t('errorForSending'));

      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <form className={`textSecondary ${styles.container}`} onSubmit={handleSubmit}>
      <div className={styles.box}>
        <div className={styles.title}>{t('fullName')}</div>
        <input
          className="textBody"
          type="text"
          name="name"
          placeholder={t('enterName')}
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.box}>
        <div className={styles.title}>{t('contactEmail')}</div>
        <input
          className="textBody"
          type="text"
          name="email"
          placeholder={t('enterEmail')}
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.box}>
        <div className={styles.title}>{t('cityLocation')}</div>
        <input
          className="textBody"
          type="text"
          name="city"
          placeholder={t('eGKyiv')}
          value={form.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.box}>
        <div className={styles.title}>{t('optionalMessage')}</div>
        <textarea
          className="textBody"
          name="message"
          placeholder={t('messageOptional')}
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button text={t('submitRequest')} buttonWidth="100%" type="submit" />
      {success && (
        <p className={styles.success} style={{ color: 'green' }}>
          {t('messageSent')}
        </p>
      )}
      {error && (
        <p className={styles.error} style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </form>
  );
};
