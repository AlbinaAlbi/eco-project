import { useLanguage } from '../context/LanguageContext';
import folder from '../imgs/Folder.svg';
import safe from '../imgs/Safe.svg';
import eye from '../imgs/eye.svg';
import timer from '../imgs/timer.svg';

interface TransparentProcessProps {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export const useTransparentProcess = (): TransparentProcessProps[] => {
  const { t } = useLanguage();

  const titleFirst = t('fillOut.title');
  const descriptionFirst = t('fillOut.description');
  const iconFirst = folder;

  const titleSecond = t('review.title');
  const descriptionSecond = t('review.description');
  const iconSecond = safe;

  const titleThird = t('project.title');
  const descriptionThird = t('project.description');
  const iconThird = eye;

  const titleFourth = t('automatic.title');
  const descriptionFourth = t('automatic.description');
  const iconFourth = timer;

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
      titleKey: titleFourth,
      descriptionKey: descriptionFourth,
      icon: iconThird,
    },
    {
      id: 3,
      titleKey: titleThird,
      descriptionKey: descriptionThird,
      icon: iconFourth,
    },
  ];
};
