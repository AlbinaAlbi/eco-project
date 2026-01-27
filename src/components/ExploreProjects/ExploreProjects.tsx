import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Description } from '../Description';
import { TagAndTitle } from '../TagAndTitle';
import { ExploreCarousel } from './ExploreCarousel';
import styles from './ExploreProjects.module.scss';

export const ExploreProjects = () => {
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.explore;
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

      <ExploreCarousel />
    </div>
  );
};
