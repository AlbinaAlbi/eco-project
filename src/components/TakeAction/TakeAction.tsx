import { useLanguage } from '../../context/LanguageContext';
import { useDeviceType } from '../../hooks/getDeviceType';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { TagAndTitle } from '../TagAndTitle';
import { Description } from './Description';
import styles from './TakeAction.module.scss';

export const TakeAction = () => {
  const device = useDeviceType();
  const isMobile = device === 'mobile';
  const { t } = useLanguage();

  const textParts = isMobile ? t('actionDescription.mobile') : t('actionDescription.desktop');

  return (
    <div className={styles.container}>
      <TagAndTitle data={SECTION_HEADERS.action} />
      <Description title={[...textParts]} />
    </div>
  );
};
