import { ProjectGoal } from '../../../components/ProjectGoal';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useLanguage } from '../../../context/LanguageContext';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './OurGoals.module.scss';

export const OurGoals = () => {
  const { t } = useLanguage();
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.ourGoals;

  const list = [
    {
      count: 1,
      title: 'Restore degraded forest areas',
      description:
        'We plant native tree species to recover parts of the Carpathian ecosystem affected by deforestation and storms',
    },
    {
      count: 2,
      title: 'Strengthen biodiversity',
      description:
        'By restoring natural habitats, we support the return of local wildlife and improve long-term ecological balance',
    },
    {
      count: 3,
      title: 'Engage communities in forest protection',
      description:
        'We involve volunteers, schools, and local residents to build long-term awareness and responsibility for nature',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="wrapperTextAlign">
        <TagAndTitle
          tag={t(tagKey)}
          title={t(titleKey)}
          tagColor={tagColor}
          titleColor={titleColor}
        />
      </div>
      <div className={styles.goalList}>
        {list.map((goal) => (
          <ProjectGoal key={goal.count} goal={goal} />
        ))}
      </div>
    </div>
  );
};
