import { useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../hooks/getDeviceType';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import { Button } from '../../../components/Button';
import { Image } from '../../../components/Image';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { Description } from '../../../components/Description';
import styles from './TakeAction.module.scss';
import TakeActionImg from '../../../imgs/Become a Volunteer.png';
import { useSectionHeader } from '../../../hooks/useSectionHeader';

export const TakeAction = () => {
  const { t } = useLanguage();
  const device = useDeviceType();

  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.action;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });

  let buttonWidth: string;

  switch (device) {
    case 'tablet':
      buttonWidth = '248px';
      break;
    case 'desktop':
      buttonWidth = '285px';
      break;
    default:
      buttonWidth = '100%';
  }

  return (
    <div className={styles.container}>
      <TagAndTitle
        tag={tag}
        title={title}
        tagColor={tagColor}
        titleColor={titleColor}
        bigFont={true}
      />

      <Description title={description} />

      <div className={styles.buttons}>
        <Button text={t('explore')} buttonWidth={buttonWidth} />
        <Button text={t('volunteer')} color={'white'} buttonWidth={buttonWidth} />
      </div>

      <div className={styles.img}>
        <Image img={TakeActionImg} alt={'Become a Volunteer'} />
      </div>
    </div>
  );
};
