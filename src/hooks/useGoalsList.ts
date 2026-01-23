import { useLanguage } from '../context/LanguageContext';
import goal1 from '../imgs/goal1.jpg';
import goal2 from '../imgs/goal2.jpg';
import goal3 from '../imgs/goal3.png';

interface GoalsListProps {
  id: number;
  titleKey: string;
  descriptionKey: string;
  photo: string;
}

export const useGoalsList = (): GoalsListProps[] => {
  const { t } = useLanguage();

  const titleFirst = t('goalFirst.title');
  const descriptionFirst = t('goalFirst.description');
  const iconFirst = goal1;

  const titleSecond = t('goalSecond.title');
  const descriptionSecond = t('goalSecond.description');
  const iconSecond = goal2;

  const titleThird = t('goalThird.title');
  const descriptionThird = t('goalThird.description');
  const iconThird = goal3;

  return [
    {
      id: 1,
      titleKey: titleFirst,
      descriptionKey: descriptionFirst,
      photo: iconFirst,
    },
    {
      id: 2,
      titleKey: titleSecond,
      descriptionKey: descriptionSecond,
      photo: iconSecond,
    },
    {
      id: 3,
      titleKey: titleThird,
      descriptionKey: descriptionThird,
      photo: iconThird,
    },
  ];
};
