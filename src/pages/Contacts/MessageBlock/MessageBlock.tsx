import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

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

      {success && <p style={{ color: 'green' }}>{t('messageSent')}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};
