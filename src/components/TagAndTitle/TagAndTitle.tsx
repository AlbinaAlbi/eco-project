import styles from './TagAndTitle.module.scss';

interface TagAndTitleProps {
  tag: string;
  title: string | string[];
  tagColor: string;
  titleColor: string;
}

export const TagAndTitle = ({ tag, title, tagColor, titleColor }: TagAndTitleProps) => {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <div className={styles.container}>
      <span className={`textSmall ${styles.tagText}`} style={{ backgroundColor: tagColor }}>
        {tag}
      </span>

      <h1 className={styles.titleText} style={{ color: titleColor }}>
        {titleLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < titleLines.length - 1 && <br />}
          </span>
        ))}
      </h1>
    </div>
  );
};
