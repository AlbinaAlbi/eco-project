import { ContactUs } from './ContactUs';
import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
        <ContactUs />
      </div>
    </div>
  );
};
