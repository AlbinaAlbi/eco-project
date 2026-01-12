import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Image } from '../Image';
import { TagAndTitle } from '../TagAndTitle';
import styles from './Mission.module.scss';
import TakeActionImg from '../../imgs/Become a Volunteer.png';

export const Mission = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.mission;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });

  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />

      <div className={styles.img}>
        <Image img={TakeActionImg} alt={'Become a Volunteer'} />
      </div>
    </div>
  );
};
