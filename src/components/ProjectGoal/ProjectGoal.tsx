import styles from './ProjectGoal.module.scss';

interface ProjectGoalProps {
  goal: {
    title: string;
    description: string;
  };
  goalInd: number;
}

export const ProjectGoal = ({ goal, goalInd }: ProjectGoalProps) => {
  const countGoal = `0${goalInd}`;
  return (
    <div className={styles.container}>
      <div className={styles.count}>{countGoal}</div>
      <h4>{goal.title}</h4>
      <div className={`textBody ${styles.description}`}>{goal.description}</div>
    </div>
  );
};
