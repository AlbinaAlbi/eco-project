import styles from './ProjectGoal.module.scss';

interface ProjectGoalProps {
  goal: {
    count: number;
    title: string;
    description: string;
  };
}

export const ProjectGoal = ({ goal }: ProjectGoalProps) => {
  const countGoal = `0${goal.count}`;
  return (
    <div className={styles.container}>
      <div className={styles.count}>{countGoal}</div>
      <h4>{goal.title}</h4>
      <div className={`textBody ${styles.description}`}>{goal.description}</div>
    </div>
  );
};
