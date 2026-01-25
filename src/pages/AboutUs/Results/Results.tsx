import { TagAndTitle } from '../../../components/TagAndTitle';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './Results.module.scss';

export const Results = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.results;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });

  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
    </div>
  );
};
