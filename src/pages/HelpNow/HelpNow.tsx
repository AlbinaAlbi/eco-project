import { Description } from '../../components/Description';
import { TagAndTitle } from '../../components/TagAndTitle';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import styles from './HelpNow.module.scss';
import { TransparentProcess } from './TransparentProcess';

export const HelpNow = () => {
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } =
    SECTION_HEADERS.StartYourProject;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });
  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      <Description title={description} />
      <div className={styles.transparent}>
        <TransparentProcess />
      </div>
    </div>
  );
};
