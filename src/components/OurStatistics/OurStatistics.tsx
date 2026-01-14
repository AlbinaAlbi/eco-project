import { useSectionHeader } from '../../hooks/useSectionHeader';
import { useStatistics } from '../../hooks/useStatistics';
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

  const statisticsList = useStatistics(projectsLength);

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
