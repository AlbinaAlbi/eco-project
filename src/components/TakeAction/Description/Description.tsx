import styles from './Description.module.scss';

interface DescriptionProps {
  title: string[];
}
export const Description = ({ title }: DescriptionProps) => {
  return (
    <div className={styles.container}>
      {title.map((part, index) => (
        <span className="textBody" key={index}>
          {part}
          {index < title.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
};
