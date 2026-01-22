import { Button } from '../../../components/Button';
import { Description } from '../../../components/Description';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../hooks/getDeviceType';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './FindAProject.module.scss';

export const FindAProject = () => {
  const { titleKey, descriptionKey, titleColor } = SECTION_HEADERS.findAProject;
  const { title, description } = useSectionHeader({
    titleKey,
    descriptionKey,
  });
  const device = useDeviceType();
  const { t } = useLanguage();

  return (
    <div className={`containerContentPadding ${styles.container}`}>
      <TagAndTitle title={title} titleColor={titleColor} />
      <Description title={description} />
      {device !== 'mobile' && <Button text={t('submit')} color={'green'} buttonWidth={'320px'} />}
    </div>
  );
};
