import { ErrorElement } from '../../components/ErrorElement';
import { Loader } from '../../components/Loader';
import { useAppSelector } from '../../hooks/hooks';
import { ContactUs } from './ContactUs';
import styles from './Contacts.module.scss';
import { SendMessage } from './SendMessage';

export const Contacts = () => {
  const { loading, error } = useAppSelector((state) => state.projects);

  if (loading) return <Loader />;
  if (error) return <ErrorElement message={error} />;

  return (
    <div className={`containerMaxWidth containerContentPadding ${styles.container}`}>
      <ContactUs />
      <SendMessage />
    </div>
  );
};
