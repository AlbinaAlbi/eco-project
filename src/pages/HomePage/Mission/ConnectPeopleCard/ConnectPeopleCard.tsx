import { useRenderText } from '../../../../hooks/renderText';
import styles from './ConnectPeopleCard.module.scss';

interface ConnectPeopleCardProps {
  title: string | string[];
  description: string | string[];
}

export const ConnectPeopleCard = ({ title, description }: ConnectPeopleCardProps) => {
  const { renderText } = useRenderText();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>{renderText(title)}</h4>
        <div className="textBody">{renderText(description)}</div>
      </div>
    </div>
  );
};
