import styles from './Description.module.scss';

interface DescriptionProps {
  title: string[] | string;
}

export const Description = ({ title }: DescriptionProps) => {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <div className={styles.container}>
      {lines.map((part, index) => (
        <span className="textBody" key={index}>
          {part}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
};
