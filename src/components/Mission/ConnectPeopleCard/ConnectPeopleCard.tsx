import styles from './ConnectPeopleCard.module.scss';

interface ConnectPeopleCardProps {
  title: string | string[];
  description: string | string[];
}

export const ConnectPeopleCard = ({ title, description }: ConnectPeopleCardProps) => {
  const titleLines = Array.isArray(title) ? title : [title];
  const descriptionLines = Array.isArray(description) ? description : [description];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>
          {titleLines.map((part, index) => (
            <span key={index}>
              {part}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h4>
        <div className="textBody">
          {descriptionLines.map((part, index) => (
            <span key={index}>
              {part}
              {index < descriptionLines.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
