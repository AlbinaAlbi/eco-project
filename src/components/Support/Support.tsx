import { TagAndTitle } from '../TagAndTitle';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { useSupportList } from '../../hooks/useSupportList';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import styles from './Support.module.scss';
import { SupportCardInform } from '../SupportCardInform';

export const Support = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.support;

  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });

  const supportList = useSupportList();

  return (
    <div className={`containerContentPadding containerMaxWidth ${styles.container}`}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />

      <div className={styles.contactsList}>
        {supportList.map((support) => (
          <SupportCardInform key={support.id} contact={support} />
        ))}
      </div>
    </div>
  );
};
