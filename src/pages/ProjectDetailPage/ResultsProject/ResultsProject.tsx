import { ResultsProjectCard } from '../../../components/ResultsProjectCard';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useLanguage } from '../../../context/LanguageContext';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './ResultsProject.module.scss';

export const ResultsProject = () => {
  const { t } = useLanguage();
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.resultsProject;

  const list = [
    {
      count: '2450+',
      title: t('resultsList.plantedTitle'),
    },
    {
      count: '180+',
      title: t('volunteersInvolved'),
    },
    {
      count: `12 ${t('ha')}`,
      title: t('forestArea'),
    },
    {
      count: `3 ${t('months')}`,
      title: t('damagedZones'),
    },
  ];

  return (
    <div className={styles.container}>
      <TagAndTitle
        tag={t(tagKey)}
        title={t(titleKey)}
        tagColor={tagColor}
        titleColor={titleColor}
      />

      <div className={styles.goalList}>
        {list.map((result) => (
          <ResultsProjectCard key={result.count} result={result} />
        ))}
      </div>
    </div>
  );
};
