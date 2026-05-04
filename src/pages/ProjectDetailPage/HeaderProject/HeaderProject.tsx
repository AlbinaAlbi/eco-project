import { Button } from '../../../components/Button';
import { Description } from '../../../components/Description';
import { Image } from '../../../components/Image';
import { Status } from '../../../components/Status';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { VolunteersNeeded } from '../../../components/VolunteersNeeded';
import { TranslationKey, useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../utils/getDeviceType';
import { CATEGORY_MAP } from '../../../hooks/useFilter';
import { useTranslatedCity } from '../../../hooks/useTranslatedCity';
import styles from './HeaderProject.module.scss';
import { Project } from '../../../types/ProjectType';
import { Region } from '../../../components/FeaturedProjects/ProjectCard/Region';
import { ProgressBar } from '../../../components/FeaturedProjects/ProjectCard/ProgressBar';

interface HeaderProjectProps {
  projectDetail: Project;
}

export const HeaderProject = ({ projectDetail }: HeaderProjectProps) => {
  const { t } = useLanguage();
  const cityTranslations = useTranslatedCity(projectDetail.city);
  const category = projectDetail.category.toLowerCase().trim();
  const categoryKey = `categoryFilter.${CATEGORY_MAP[category]}` as TranslationKey;
  const translationKey = t(categoryKey);

  const translationTag = Array.isArray(translationKey)
    ? translationKey[0]
    : typeof translationKey === 'string'
      ? translationKey
      : '';

  const device = useDeviceType();
  let buttonWidth;
  let bigImgUrl = projectDetail.imageMobile;

  switch (device) {
    case 'desktop':
      buttonWidth = '253px';
      bigImgUrl = projectDetail.imageDesktop;
      break;
    case 'tablet':
      buttonWidth = '248px';
      bigImgUrl = projectDetail.imageTablet;
      break;
    default:
      buttonWidth = '263px';
  }

  return (
    <div className={`wrapperTextAlign ${styles.container}`}>
      <TagAndTitle
        tag={translationTag}
        title={projectDetail.title}
        tagColor={'#EDEEEE'}
        titleColor={'#121212'}
      />
      <Description title={projectDetail.shortDescription} />

      <div className={styles.section}>
        <Region regionText={cityTranslations} />
        <Status status={projectDetail.status} />
        <VolunteersNeeded count={projectDetail.volunteersNeeded} />
      </div>
      <div className={styles.progressBar}>
        <ProgressBar
          goalAmount={projectDetail.goalAmount}
          currentAmount={projectDetail.currentAmount}
        />

        <div className={styles.buttons}>
          <Button text={t('explore')} buttonWidth={buttonWidth} to="/projects" />
          <Button text={t('volunteer')} color={'white'} buttonWidth={buttonWidth} to="/volunteer" />
        </div>
      </div>

      <div className={styles.image}>
        <Image img={bigImgUrl} alt={projectDetail.title} />
      </div>
    </div>
  );
};
