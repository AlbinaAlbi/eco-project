import styles from './TagAndTitle.module.scss';

interface TagAndTitleProps {
  data: {
    tag: string;
    title: string;
    tagColor: string;
    titleColor: string;
  };
}

export const TagAndTitle = ({ data }: TagAndTitleProps) => {
  const { tag, title, tagColor, titleColor } = data;

  return (
    <div className={styles.container}>
      <span className="section-header__tag" style={{ backgroundColor: tagColor }}>
        {tag}
      </span>
      <h2 className="section-header__title" style={{ color: titleColor }}>
        {title}
      </h2>
    </div>
  );
};
