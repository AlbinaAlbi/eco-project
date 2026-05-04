import { useTranslatedText } from './useResponsiveText';

export interface ResultsListProps {
  id: number;
  titleKey: string | string[];
  descriptionKey: string | string[];
  count: string | string[];
}

export const useResultsList = (): ResultsListProps[] => {
  const plantedTitle = useTranslatedText('resultsList.plantedTitle');
  const plantedDescription = useTranslatedText('resultsList.plantedDescription');
  const plantedCount = useTranslatedText('resultsList.plantedCount');

  const volunteersTitle = useTranslatedText('resultsList.volunteersTitle');
  const volunteersDescription = useTranslatedText('resultsList.volunteersDescription');
  const volunteersCount = useTranslatedText('resultsList.volunteersCount');

  const landscapesTitle = useTranslatedText('resultsList.landscapesTitle');
  const landscapesDescription = useTranslatedText('resultsList.landscapesDescription');
  const landscapesCount = useTranslatedText('resultsList.landscapesCount');

  const collectedTitle = useTranslatedText('resultsList.collectedTitle');
  const collectedDescription = useTranslatedText('resultsList.collectedDescription');
  const collectedCount = useTranslatedText('resultsList.collectedCount');

  const reachedTitle = useTranslatedText('resultsList.reachedTitle');
  const reachedDescription = useTranslatedText('resultsList.reachedDescription');
  const reachedCount = useTranslatedText('resultsList.reachedCount');

  return [
    {
      id: 1,
      titleKey: plantedTitle,
      descriptionKey: plantedDescription,
      count: plantedCount,
    },
    {
      id: 2,
      titleKey: volunteersTitle,
      descriptionKey: volunteersDescription,
      count: volunteersCount,
    },
    {
      id: 3,
      titleKey: landscapesTitle,
      descriptionKey: landscapesDescription,
      count: landscapesCount,
    },
    {
      id: 4,
      titleKey: collectedTitle,
      descriptionKey: collectedDescription,
      count: collectedCount,
    },
    {
      id: 5,
      titleKey: reachedTitle,
      descriptionKey: reachedDescription,
      count: reachedCount,
    },
  ];
};
