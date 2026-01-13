import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Description } from '../Description';
import { TagAndTitle } from '../TagAndTitle';
import styles from './FeaturedProjects.module.scss';
import { ProjectsCarousel } from './ProjectsCarousel';

export const FeaturedProjects = () => {
  const { tagKey, titleKey, tagColor, titleColor, descriptionKey } = SECTION_HEADERS.featured;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });

  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      <Description title={description} />

      <ProjectsCarousel />
    </div>
  );
};
