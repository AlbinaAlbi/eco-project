import styles from './ProgressLine.module.scss';

interface ProgressLineProps {
  percentage: number;
}

export const ProgressLine = ({ percentage }: ProgressLineProps) => {
  return (
    <div className={styles.container}>
      <span className="textSmall">{percentage} %</span>
      <div className={styles.progressBar}>
        <div className={styles.progressCurrent} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
