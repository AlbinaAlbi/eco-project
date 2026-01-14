import { useLanguage } from '../../context/LanguageContext';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Description } from '../Description';
import { TagAndTitle } from '../TagAndTitle';
import styles from './OurStatistics.module.scss';

interface OurStatisticsProps {
  projectsLength: number;
}
export const OurStatistics = ({ projectsLength }: OurStatisticsProps) => {
  const { tagKey, titleKey, tagColor, descriptionKey, titleColor } = SECTION_HEADERS.statistics;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });
  const { t } = useLanguage();

  const statisticsList = [
    {
      id: 1,
      titleKey: t('statisticsList.statistic1Title'),
      descriptionKey: t('statisticsList.statistic1Description'),
      count: t('statisticsList.statistic1Count'),
    },
    {
      id: 2,
      titleKey: t('statisticsList.statistic2Title'),
      descriptionKey: t('statisticsList.statistic2Description'),
      count: t('statisticsList.statistic2Count'),
    },
    {
      id: 3,
      titleKey: t('statisticsList.statistic2Title'),
      descriptionKey: t('statisticsList.statistic2Description'),
      count: `${projectsLength}`,
    },
    {
      id: 4,
      titleKey: t('statisticsList.statistic2Title'),
      descriptionKey: t('statisticsList.statistic2Description'),
      count: t('statisticsList.statistic2Count'),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={`containerContentPadding containerMaxWidth ${styles.content}`}>
        <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
        <Description title={description} />
      </div>
    </div>
  );
};
