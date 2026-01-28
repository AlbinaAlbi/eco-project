import { Description } from '../../../components/Description';
import { Region } from '../../../components/FeaturedProjects/ProjectCard/Region';
import { Status } from '../../../components/Status';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { TranslationKey, useLanguage } from '../../../context/LanguageContext';
import { CATEGORY_MAP } from '../../../hooks/useFilter';
import { useTranslatedCity } from '../../../hooks/useTranslatedCity';
import { Project } from '../../../types/Project';
import styles from './HeaderProject.module.scss';

interface HeaderProjectProps {
  project: Project;
}

export const HeaderProject = ({ project }: HeaderProjectProps) => {
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

  console.log(translationKey);

  return (
    <div
      className={`containerMaxWidth containerContentPadding wrapperTextAlign ${styles.container}`}
    >
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
      </div>
    </div>
  );
};
