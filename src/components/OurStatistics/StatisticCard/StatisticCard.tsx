import { useRenderText } from '../../../hooks/renderText';
import styles from './StatisticCard.module.scss';

interface StatisticCardProps {
  information: {
    id: number;
    titleKey: string | string[];
    descriptionKey: string | string[];
    count: string | string[];
  };
}

export const StatisticCard = ({ information }: StatisticCardProps) => {
  const { renderText } = useRenderText();
  const { titleKey, descriptionKey, count } = information;

  return (
    <div className={styles.container}>
      <h4>{renderText(titleKey)}</h4>
      <div className="textBody">{renderText(descriptionKey)}</div>
    </div>
  );
};
