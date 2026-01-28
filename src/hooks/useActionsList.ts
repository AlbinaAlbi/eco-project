import { useTranslatedText } from './useResponsiveText';

export interface ActionsListProps {
  id: number;
  titleKey: string | string[];
  count: string | string[];
}

export const useActionsList = (): ActionsListProps[] => {
  const plantedTitle = useTranslatedText('actionsList.plantedTitle');
  const plantedCount = useTranslatedText('resultsList.plantedCount');

  const volunteersTitle = useTranslatedText('actionsList.volunteersTitle');
  const volunteersCount = useTranslatedText('actionsList.volunteersCount');

  const landscapesTitle = useTranslatedText('actionsList.landscapesTitle');
  const landscapesCount = useTranslatedText('actionsList.landscapesCount');

  const collectedTitle = useTranslatedText('actionsList.collectedTitle');
  const collectedCount = useTranslatedText('actionsList.collectedCount');

  const reachedTitle = useTranslatedText('actionsList.reachedTitle');
  const reachedCount = useTranslatedText('actionsList.reachedCount');

  return [
    {
      id: 1,
      titleKey: plantedTitle,
      count: plantedCount,
    },
    {
      id: 2,
      titleKey: volunteersTitle,
      count: volunteersCount,
    },
    {
      id: 3,
      titleKey: landscapesTitle,
      count: landscapesCount,
    },
    {
      id: 4,
      titleKey: collectedTitle,
      count: collectedCount,
    },
    {
      id: 5,
      titleKey: reachedTitle,
      count: reachedCount,
    },
  ];
};
