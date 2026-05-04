import styles from './ResultsProjectCard.module.scss';

interface ResultsProjectCardProps {
  result: {
    count: string;
    title: string;
  };
}

export const ResultsProjectCard = ({ result }: ResultsProjectCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.count}>{result.count}</div>
      <h5>{result.title}</h5>
    </div>
  );
};
