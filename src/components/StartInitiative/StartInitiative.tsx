import { useLanguage } from '../../context/LanguageContext';
import { useDeviceType } from '../../hooks/getDeviceType';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Button } from '../Button';
import { Description } from '../Description';
import { TagAndTitle } from '../TagAndTitle';
import styles from './StartInitiative.module.scss';

export const StartInitiative = () => {
  const { t } = useLanguage();
  const device = useDeviceType();
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.start;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });

  let buttonWidth: string;

  switch (device) {
    case 'tablet':
      buttonWidth = '320px';
      break;
    case 'desktop':
      buttonWidth = '350px';
      break;
    default:
      buttonWidth = '100%';
  }

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

      <Button text={t('submit')} buttonWidth={buttonWidth} />
    </div>
  );
};
