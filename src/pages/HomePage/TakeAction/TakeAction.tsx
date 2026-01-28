import { useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../hooks/getDeviceType';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import { Button } from '../../../components/Button';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { Description } from '../../../components/Description';
import styles from './TakeAction.module.scss';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { useActionsList } from '../../../hooks/useActionsList';
import { ActionsList } from './ActionsList';

export const TakeAction = () => {
  const { t } = useLanguage();
  const device = useDeviceType();
  const actionsList = useActionsList();
  const mobileDevice = device === 'mobile';

  const { tagKey, titleKey, descriptionKey, tagColor, titleColor, describtionColor } =
    SECTION_HEADERS.action;

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
    <div className={styles.content}>
      <div className={styles.container}>
        <div className="wrapperTextAlign">
          <TagAndTitle title={title} tagColor={tagColor} titleColor={titleColor} bigFont={true} />

          <Description title={description} describtionColor={describtionColor} />
        </div>

        <div className={styles.buttons}>
          <Button text={t('explore')} buttonWidth={buttonWidth} />
          <Button
            text={t('volunteer')}
            color={'white'}
            buttonWidth={buttonWidth}
            backgroundColor={false}
          />
        </div>

        {!mobileDevice && <ActionsList actionsList={actionsList} />}
      </div>

      {mobileDevice && <ActionsList actionsList={actionsList} />}
    </div>
  );
};
