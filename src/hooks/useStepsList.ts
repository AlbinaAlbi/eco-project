import { useLanguage } from '../context/LanguageContext';
import map from '../imgs/Map.svg';
import info from '../imgs/Info.svg';
import handHeart from '../imgs/Hand-heart.svg';
import { StepsListProps } from '../types/StepsListProps';

export const useStepsList = (): StepsListProps[] => {
  const { t } = useLanguage();

  const titleFirst = t('worksSteps.step1Title');
  const descriptionFirst = t('worksSteps.step1Description');
  const iconFirst = map;

  const titleSecond = t('worksSteps.step2Title');
  const descriptionSecond = t('worksSteps.step2Description');
  const iconSecond = info;

  const titleThird = t('worksSteps.step3Title');
  const descriptionThird = t('worksSteps.step3Description');
  const iconThird = handHeart;

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
