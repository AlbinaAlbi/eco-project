import { Button } from '../../../components/Button';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './MessageBlock.module.scss';

export const MessageBlock = () => {
  const { t } = useLanguage();

  return (
    <form className={styles.form}>
      <input id="name" type="text" placeholder={t('name')} required />

      <input id="email" type="email" placeholder={t('email')} required />

      <textarea id="message" placeholder={t('message')} rows={5} required />

      <Button text={t('sendMessage')} color={'green'} buttonWidth="100%" />
    </form>
  );
};
