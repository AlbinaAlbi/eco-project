import school from '../imgs/school.svg';
import paw from '../imgs/paw.svg';
import leaf from '../imgs/leaf.svg';
import { useTranslatedText } from './useResponsiveText';

export interface SupportListProps {
  id: number;
  titleKey: string | string[];
  descriptionKey: string | string[];
  icon: string;
}

export const useSupportList = (): SupportListProps[] => {
  const titleFirst = useTranslatedText('sustainability.title');
  const descriptionFirst = useTranslatedText('sustainability.description');
  const iconFirst = leaf;

  const titleSecond = useTranslatedText('protection.title');
  const descriptionSecond = useTranslatedText('protection.description');
  const iconSecond = paw;

  const titleThird = useTranslatedText('education.title');
  const descriptionThird = useTranslatedText('education.description');
  const iconThird = school;

  return [
    {
      id: 1,
      titleKey: titleFirst,
      descriptionKey: descriptionFirst,
      icon: iconFirst,
    },
    {
      id: 2,
      titleKey: titleSecond,
      descriptionKey: descriptionSecond,
      icon: iconSecond,
    },
    {
      id: 3,
      titleKey: titleThird,
      descriptionKey: descriptionThird,
      icon: iconThird,
    },
  ];
};
