import { useEffect, useState } from 'react';
import { Button } from '../../../components/Button';
import { useLanguage } from '../../../context/LanguageContext';
import { api } from '../../../api/api';
import styles from './MessageBlock.module.scss';
import { Message } from '../../../types/Message';

export const MessageBlock = () => {
  const { t } = useLanguage();

  const [form, setForm] = useState<Message>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) {
      setError('');
    }

    setForm({ ...form, [e.target.id]: e.target.value });
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

    if (form.message.trim().length < 10) {
      setError(t('messageMinLength'));
      return;
    }

    setLoading(true);

    try {
      await api.post('/contacts', form);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setError('Помилка при відправці');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        placeholder={t('name')}
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        id="email"
        type="email"
        placeholder={t('email')}
        value={form.email}
        onChange={handleChange}
        required
      />

      <textarea
        id="message"
        placeholder={t('message')}
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
      />

      <Button
        text={loading ? t('sending') : t('sendMessage')}
        color={'green'}
        buttonWidth="100%"
        type="submit"
      />

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
