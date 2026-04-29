import { useRenderText } from '../../../hooks/useRenderText';
import { ContactsListProps } from '../../../hooks/useContactsList';
import styles from './ContactCard.module.scss';

interface ContactCardProps {
  contact: ContactsListProps;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  const { renderText } = useRenderText();

  return (
    <div className={styles.container}>
      <div className={styles.boxImg}>
        <img src={contact.img} alt={`Contact card img ${contact.id}`} />
      </div>
      <h4>{renderText(contact.descriptionKey)}</h4>
      <a href={`mailto:${contact.email}`} className={styles.email} title="Написать письмо">
        {contact.email}
      </a>
    </div>
  );
};
