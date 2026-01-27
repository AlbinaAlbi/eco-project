import { ContactUs } from './ContactUs';
import styles from './Contacts.module.scss';
import { SendMessage } from './SendMessage';

export const Contacts = () => {
  return (
    <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
      <ContactUs />
      <SendMessage />
    </div>
  );
};
