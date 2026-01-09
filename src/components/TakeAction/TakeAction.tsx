import { useLanguage } from '../../context/LanguageContext';
import { useDeviceType } from '../../hooks/getDeviceType';
import { useTranslatedText } from '../../hooks/useResponsiveText';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Button } from '../Button';
import { TagAndTitle } from '../TagAndTitle';
import { Description } from './Description';
import styles from './TakeAction.module.scss';

export const TakeAction = () => {
  const { t } = useLanguage();
  const device = useDeviceType();

  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.action;
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

  const tag = useTranslatedText(tagKey) as string;
  const actionTitle = useTranslatedText(titleKey);
  const rawDescription = useTranslatedText(descriptionKey ?? '');
  const description = descriptionKey ? rawDescription : null;

  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={actionTitle} tagColor={tagColor} titleColor={titleColor} />
      {description && <Description title={description} />}

      <div className={styles.buttons}>
        <Button text={t('explore')} buttonWidth={buttonWidth} />
        <Button text={t('volunteer')} color={'white'} buttonWidth={buttonWidth} />
      </div>
    </div>
  );
};
