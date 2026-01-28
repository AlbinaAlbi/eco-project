import { useTranslatedText } from './useResponsiveText';

export interface ActionsListProps {
  id: number;
  titleKey: string | string[];
  count: string | string[];
}

export const useActionsList = (): ActionsListProps[] => {
  const plantedTitle = useTranslatedText('plantedTitle');
  const plantedCount = useTranslatedText('plantedCount');

  const volunteersTitle = useTranslatedText('volunteersTitle');
  const volunteersCount = useTranslatedText('volunteersCount');

  const landscapesTitle = useTranslatedText('landscapesTitle');
  const landscapesCount = useTranslatedText('landscapesCount');

  const collectedTitle = useTranslatedText('collectedTitle');
  const collectedCount = useTranslatedText('collectedCount');

  const reachedTitle = useTranslatedText('reachedTitle');
  const reachedCount = useTranslatedText('reachedCount');

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
