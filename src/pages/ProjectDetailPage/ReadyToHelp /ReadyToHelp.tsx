import { Button } from '../../../components/Button';
import { Description } from '../../../components/Description';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../hooks/getDeviceType';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './ReadyToHelp.module.scss';

export const ReadyToHelp = () => {
  const { t } = useLanguage();
  const { titleKey, titleColor, descriptionKey } = SECTION_HEADERS.readyToHelpSection;
  const { title, description } = useSectionHeader({
    titleKey,
    descriptionKey,
  });

  const device = useDeviceType();

  let buttonWidth;

  switch (device) {
    case 'tablet':
      buttonWidth = '248px';
      break;
    case 'desktop':
      buttonWidth = '285px';
      break;
    default:
      buttonWidth = '372px';
  }

  return (
    <div className={styles.container}>
      <TagAndTitle title={title} titleColor={titleColor} />
      <Description title={description} />
      <div className={styles.buttons}>
        <Button text={t('donate')} color="green" buttonWidth={buttonWidth} />
        <Button text={t('joinAsVolunteer')} color="white" buttonWidth={buttonWidth} />
      </div>
    </div>
  );
};
