import { ActionCard } from '../../../../components/ActionCard';
import { ActionsListProps } from '../../../../hooks/useActionsList';
import styles from './ActionsList.module.scss';

interface ListProps {
  actionsList: ActionsListProps[];
}

export const ActionsList = ({ actionsList }: ListProps) => {
  return (
    <div className={styles.actions}>
      <div className={styles.list}>
        <ActionCard action={actionsList[0]} />
        <ActionCard action={actionsList[1]} />
        <ActionCard action={actionsList[2]} />
      </div>

      <div className={styles.list}>
        <ActionCard action={actionsList[3]} />
        <ActionCard action={actionsList[4]} />
      </div>
    </div>
  );
};
