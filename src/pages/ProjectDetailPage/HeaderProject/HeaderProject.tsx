import { Button } from '../../../components/Button';
import { Description } from '../../../components/Description';
import { ProgressBar } from '../../../components/FeaturedProjects/ProjectCard/ProgressBar';
import { Region } from '../../../components/FeaturedProjects/ProjectCard/Region';
import { Image } from '../../../components/Image';
import { Status } from '../../../components/Status';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { VolunteersNeeded } from '../../../components/VolunteersNeeded';
import { TranslationKey, useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../hooks/getDeviceType';
import { CATEGORY_MAP } from '../../../hooks/useFilter';
import { useTranslatedCity } from '../../../hooks/useTranslatedCity';
import { Project } from '../../../types/Project';
import { ProjectDetail } from '../../../types/ProjectDetail';
import styles from './HeaderProject.module.scss';
import man from '../../../imgs/man plantin.png';

interface HeaderProjectProps {
  project: Project;
  projectDetail: ProjectDetail;
}

export const HeaderProject = ({ project, projectDetail }: HeaderProjectProps) => {
  const cityTranslations = useTranslatedCity(project.city);
  const { t } = useLanguage();
  const category = project.category.toLowerCase().trim();
  const categoryKey = `categoryFilter.${CATEGORY_MAP[category]}` as TranslationKey;
  const translationKey = t(categoryKey);
  const translationTag = Array.isArray(translationKey)
    ? translationKey[0]
    : typeof translationKey === 'string'
      ? translationKey
      : '';
  const device = useDeviceType();
  let buttonWidth;

  switch (device) {
    case 'desktop':
      buttonWidth = '253px';
      break;
    case 'tablet':
      buttonWidth = '248px';
      break;
    default:
      buttonWidth = '263px';
  }

  return (
    <div className={`wrapperTextAlign ${styles.container}`}>
      <TagAndTitle
        tag={translationTag}
        title={project.title}
        tagColor={'#EDEEEE'}
        titleColor={'#121212'}
      />
      <Description title={project.shortDescription} />

      <div className={styles.section}>
        <Region regionText={cityTranslations} />
        <Status status={project.status} />
        <VolunteersNeeded count={39} />
      </div>
      <div className={styles.progressBar}>
        <ProgressBar goalAmount={project.goalAmount} currentAmount={project.currentAmount} />

        <div className={styles.buttons}>
          <Button text={t('explore')} buttonWidth={buttonWidth} />
          <Button text={t('volunteer')} color={'white'} buttonWidth={buttonWidth} />
        </div>
      </div>

      <div className={styles.image}>
        <Image img={man} alt={'Man plantin'} />
      </div>
    </div>
  );
};
