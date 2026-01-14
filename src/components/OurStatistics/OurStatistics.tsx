import { useTranslatedText } from '../../hooks/useResponsiveText';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';
import { Description } from '../Description';
import { TagAndTitle } from '../TagAndTitle';
import styles from './OurStatistics.module.scss';
import { StatisticCard } from './StatisticCard';

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

  const statisticsList = [
    {
      id: 1,
      titleKey: useTranslatedText('statisticsList.statistic1Title'),
      descriptionKey: useTranslatedText('statisticsList.statistic1Description'),
      count: useTranslatedText('statisticsList.statistic1Count'),
    },
    {
      id: 2,
      titleKey: useTranslatedText('statisticsList.statistic2Title'),
      descriptionKey: useTranslatedText('statisticsList.statistic2Description'),
      count: useTranslatedText('statisticsList.statistic2Count'),
    },
    {
      id: 3,
      titleKey: useTranslatedText('statisticsList.statistic3Title'),
      descriptionKey: useTranslatedText('statisticsList.statistic3Description'),
      count: `${projectsLength}`,
    },
    {
      id: 4,
      titleKey: useTranslatedText('statisticsList.statistic4Title'),
      descriptionKey: useTranslatedText('statisticsList.statistic4Description'),
      count: useTranslatedText('statisticsList.statistic4Count'),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={`containerContentPadding containerMaxWidth ${styles.content}`}>
        <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
        <Description title={description} />

        <div className={styles.statisticsCards}>
          {statisticsList.map((statistic) => (
            <StatisticCard key={statistic.id} information={statistic} />
          ))}
        </div>
      </div>
    </div>
  );
};
