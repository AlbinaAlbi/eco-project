import { Description } from '../../../components/Description';
import { Image } from '../../../components/Image';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './WhoWeAre.module.scss';
import img from '../../../imgs/whoWeAre Img.jpg';

export const WhoWeAre = () => {
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.whoWeAre;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });

  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      <div className={styles.image}>
        <Image img={img} alt={'WhoWeAre img'} />
      </div>
      <Description title={description} />
    </div>
  );
};
