import { Description } from '../../../components/Description';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useContactsList } from '../../../hooks/useContactsList';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import { ContactCard } from '../ContactCard';
import styles from './ContactUs.module.scss';

export const ContactUs = () => {
  const contactsList = useContactsList();
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.contacts;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });

  return (
    <div className={styles.container}>
      <div className="wrapperTextAlign">
        <TagAndTitle
          tag={tag}
          title={title}
          tagColor={tagColor}
          titleColor={titleColor}
          bigFont={true}
        />

        <Description title={description} />
      </div>

      <div className={styles.contactsList}>
        {contactsList.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};
