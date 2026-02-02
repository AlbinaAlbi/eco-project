import { useLanguage } from '../context/LanguageContext';

export interface RequestListProps {
  id: number;
  titleKey: string;
  descriptionKey: string;
}

export const useRequestList = (): RequestListProps[] => {
  const { t } = useLanguage();

  return [
    {
      id: 1,
      titleKey: t('requestBlock.clear.title'),
      descriptionKey: t('requestBlock.clear.description'),
    },
    {
      id: 2,
      titleKey: t('requestBlock.verified.title'),
      descriptionKey: t('requestBlock.verified.description'),
    },
    {
      id: 3,
      titleKey: t('requestBlock.detailed.title'),
      descriptionKey: t('requestBlock.detailed.description'),
    },
    {
      id: 4,
      titleKey: t('requestBlock.requested.title'),
      descriptionKey: t('requestBlock.requested.description'),
    },
    {
      id: 5,
      titleKey: t('requestBlock.visual.title'),
      descriptionKey: t('requestBlock.visual.description'),
    },
  ];
};
