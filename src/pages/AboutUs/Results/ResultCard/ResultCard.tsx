import { useRenderText } from '../../../../hooks/useRenderText';
import { ResultsListProps } from '../../../../hooks/useResultsList';
import styles from './ResultCard.module.scss';

interface ResultCardProps {
  inform: ResultsListProps;
}

export const ResultCard = ({ inform }: ResultCardProps) => {
  const { renderText } = useRenderText();
  const { titleKey, descriptionKey } = inform;

  return (
    <div key={inform.id} className={styles.card}>
      <div className={styles.count}>{inform.count}</div>
      <div className={styles.info}>
        <h5 className={styles.title}>{renderText(titleKey)}</h5>
        <div className={`textBody ${styles.description}`}>{renderText(descriptionKey)}</div>
      </div>
    </div>
  );
};
