import { TagAndTitle } from '../../../components/TagAndTitle';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import styles from './Goals.module.scss';
import { useGoalsList } from '../../../hooks/useGoalsList';

export const Goals = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.goals;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });

  const cardsList = useGoalsList();

  return (
    <div className={styles.container}>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      <div className={styles.cardsList}>
        {cardsList.map((info) => (
          <div
            key={info.id}
            className={styles.card}
            style={{ backgroundImage: `url(${info.photo})` }}
          >
            <h5 className={styles.title}>{info.titleKey}</h5>
            <div className={`textBody ${styles.description}`}>{info.descriptionKey}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
