import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Description } from '../Description';
import { TagAndTitle } from '../TagAndTitle';
import styles from './OurStatistics.module.scss';

export const OurStatistics = () => {
  const { tagKey, titleKey, tagColor, descriptionKey, titleColor } = SECTION_HEADERS.statistics;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });

  return (
    <div className={styles.container}>
      <div className={`containerContentPadding containerMaxWidth ${styles.content}`}>
        <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
        <Description title={description} />
      </div>
    </div>
  );
};
