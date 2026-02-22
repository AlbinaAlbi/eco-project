import { useRenderText } from '../../hooks/useRenderText';
import { SupportListProps } from '../../hooks/useSupportList';
import styles from './SupportCardInform.module.scss';

interface SupportCardInformProps {
  contact: SupportListProps;
}

export const SupportCardInform = ({ contact }: SupportCardInformProps) => {
  const { renderText } = useRenderText();

  return (
    <div className={styles.container}>
      <div className={styles.boxImg}>
        <img src={contact.icon} alt={`Contact card img ${contact.id}`} />
      </div>
      <h4>{renderText(contact.titleKey)}</h4>
      <div className={`textBody ${styles.description}`}>{renderText(contact.descriptionKey)}</div>
    </div>
  );
};
