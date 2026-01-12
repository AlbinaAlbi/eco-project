import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Image } from '../Image';
import { TagAndTitle } from '../TagAndTitle';
import styles from './Mission.module.scss';
import MissionImg1 from '../../imgs/mission-card-1.jpg';
import { CardLearnMore } from './CardLearnMore';
import { ConnectPeopleCard } from './ConnectPeopleCard';

export const Mission = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.mission;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });

  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />

      <div className={styles.cards}>
        <Image img={MissionImg1} alt={'Mission card 1'} />
        <div className={styles.imgContainer}>
          <ConnectPeopleCard />
          <CardLearnMore />
        </div>
      </div>
    </div>
  );
};
