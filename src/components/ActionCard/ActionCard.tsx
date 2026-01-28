import { ActionsListProps } from '../../hooks/useActionsList';
import styles from './ActionCard.module.scss';

interface ActionCardProps {
  action: ActionsListProps;
}

export const ActionCard = ({ action }: ActionCardProps) => {
  return (
    <div className={styles.container}>
      <h2>{action.count}</h2>
      <div className="textSecondary">{action.titleKey}</div>
    </div>
  );
};
