import { TagAndTitle } from '../../../components/TagAndTitle';
import { useResultsList } from '../../../hooks/useResultsList';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';
import { ResultCard } from './ResultCard';
import styles from './Results.module.scss';

export const Results = () => {
  const { tagKey, titleKey, tagColor, titleColor } = SECTION_HEADERS.results;
  const { tag, title } = useSectionHeader({
    tagKey,
    titleKey,
  });
  const resultsList = useResultsList();

  return (
    <div className={styles.container}>
      <div className="wrapperTextAlign">
        <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      </div>
      <div className={styles.resultsList}>
        {resultsList.map((result) => (
          <ResultCard key={result.id} inform={result} />
        ))}
      </div>
    </div>
  );
};
