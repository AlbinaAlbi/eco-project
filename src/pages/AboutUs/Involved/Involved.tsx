import { Button } from '../../../components/Button';
import { Description } from '../../../components/Description';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../utils/getDeviceType';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './Involved.module.scss';

export const Involved = () => {
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.involved;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });
  const { t } = useLanguage();
  const device = useDeviceType();
  let buttonWidth: string;

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
      <div className="wrapperTextAlign">
        <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      </div>
      <div className={`wrapperTextAlign ${styles.description}`}>
        <Description title={description} />
      </div>
      <div className={styles.buttons}>
        <Button to={'/volunteer'} text={t('submit')} color={'green'} buttonWidth={buttonWidth} />
        <Button
          to={'/donate'}
          text={t('donate')}
          backgroundColor={false}
          buttonWidth={buttonWidth}
        />
      </div>
    </div>
  );
};
