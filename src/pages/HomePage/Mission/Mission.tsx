import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import { Image } from '../../../components/Image';
import { TagAndTitle } from '../../../components/TagAndTitle';
import styles from './Mission.module.scss';
import MissionImg1 from '../../../imgs/mission-card-1.jpg';
import { CardLearnMore } from './CardLearnMore';
import { ConnectPeopleCard } from './ConnectPeopleCard';
import { useTranslatedText } from '../../../hooks/useResponsiveText';

export const Mission = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.mission;

  const firstTitle = useTranslatedText('missionFirstCardTitle');
  const firstDescription = useTranslatedText('missionFirstCardDescription');

  const secondTitle = useTranslatedText('missionSecondCardTitle');
  const secondDescription = useTranslatedText('missionSecondCardDescription');

  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });

  return (
    <div className={styles.container}>
      <div className="wrapperTextAlign">
        <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      </div>

      <div className={styles.cards}>
        <Image img={MissionImg1} alt={'Mission card 1'} />
        <div className={styles.imgContainer}>
          <ConnectPeopleCard title={firstTitle} description={firstDescription} />
          <CardLearnMore title={secondTitle} description={secondDescription} />
        </div>
      </div>
    </div>
  );
};
