import { useRenderText } from '../../hooks/renderText';
import { ActionsListProps } from '../../hooks/useActionsList';
import styles from './ActionCard.module.scss';

interface ActionCardProps {
  action: ActionsListProps;
}

export const ActionCard = ({ action }: ActionCardProps) => {
  const { renderText } = useRenderText();

  return (
    <div className={styles.container}>
      <h2>{action.count}</h2>
      <div className={`textSecondary ${styles.title}`}>{renderText(action.titleKey)}</div>
    </div>
  );
};
