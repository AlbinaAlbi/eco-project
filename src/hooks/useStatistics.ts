import { useTranslatedText } from './useResponsiveText';

interface StatisticItem {
  id: number;
  titleKey: string | string[];
  descriptionKey: string | string[];
  count: string | string[];
}

export const useStatistics = (projectsLength: number): StatisticItem[] => {
  const statistic1Title = useTranslatedText('statisticsList.statistic1Title');
  const statistic1Description = useTranslatedText('statisticsList.statistic1Description');
  const statistic1Count = useTranslatedText('statisticsList.statistic1Count');

  const statistic2Title = useTranslatedText('statisticsList.statistic2Title');
  const statistic2Description = useTranslatedText('statisticsList.statistic2Description');
  const statistic2Count = useTranslatedText('statisticsList.statistic2Count');

  const statistic3Title = useTranslatedText('statisticsList.statistic3Title');
  const statistic3Description = useTranslatedText('statisticsList.statistic3Description');

  const statistic4Title = useTranslatedText('statisticsList.statistic4Title');
  const statistic4Description = useTranslatedText('statisticsList.statistic4Description');
  const statistic4Count = useTranslatedText('statisticsList.statistic4Count');

  return [
    {
      id: 1,
      titleKey: statistic1Title,
      descriptionKey: statistic1Description,
      count: statistic1Count,
    },
    {
      id: 2,
      titleKey: statistic2Title,
      descriptionKey: statistic2Description,
      count: statistic2Count,
    },
    {
      id: 3,
      titleKey: statistic3Title,
      descriptionKey: statistic3Description,
      count: `${projectsLength}`,
    },
    {
      id: 4,
      titleKey: statistic4Title,
      descriptionKey: statistic4Description,
      count: statistic4Count,
    },
  ];
};
