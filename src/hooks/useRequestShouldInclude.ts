import { useLanguage } from '../context/LanguageContext';
import { RequestListProps } from '../types/RequestListProps';

export const useRequestShouldInclude = (): RequestListProps[] => {
  const { t } = useLanguage();

  return [
    {
      id: 1,
      titleKey: t('requestIncludeBlock.name.title'),
      descriptionKey: t('requestIncludeBlock.name.description'),
    },
    {
      id: 2,
      titleKey: t('requestIncludeBlock.contact.title'),
      descriptionKey: t('requestIncludeBlock.contact.description'),
    },
    {
      id: 3,
      titleKey: t('requestIncludeBlock.location.title'),
      descriptionKey: t('requestIncludeBlock.location.description'),
    },
    {
      id: 4,
      titleKey: t('requestIncludeBlock.requested.title'),
      descriptionKey: t('requestIncludeBlock.requested.description'),
    },
  ];
};
