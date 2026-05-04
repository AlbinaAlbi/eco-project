import { ProjectGoal } from '../../../components/ProjectGoal';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useLanguage } from '../../../context/LanguageContext';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './OurGoals.module.scss';

interface OurGoalsProps {
  projectGoals: [
    {
      title: string;
      description: string;
    },
  ];
}
export const OurGoals = ({ projectGoals }: OurGoalsProps) => {
  const { t } = useLanguage();
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.ourGoals;

  return (
    <div className={styles.container}>
      <TagAndTitle
        tag={t(tagKey)}
        title={t(titleKey)}
        tagColor={tagColor}
        titleColor={titleColor}
      />
      <div className={styles.goalList}>
        {projectGoals.map((goal, i) => (
          <ProjectGoal key={i} goal={goal} goalInd={i + 1} />
        ))}
      </div>
    </div>
  );
};
