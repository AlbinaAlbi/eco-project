import { useRenderText } from '../../hooks/renderText';
import styles from './TagAndTitle.module.scss';

interface TagAndTitleProps {
  tag?: string;
  title?: string | string[];
  tagColor?: string;
  titleColor?: string;
  bigFont?: boolean;
  alignLeft?: boolean;
}

export const TagAndTitle = ({
  tag,
  title,
  tagColor,
  titleColor,
  bigFont = false,
  alignLeft = false,
}: TagAndTitleProps) => {
  const { renderText } = useRenderText();

  const HeadingTag: 'h1' | 'h2' = bigFont ? 'h1' : 'h2';

  return (
    <div
      className={styles.container}
      style={{
        justifyContent: alignLeft ? 'flex-start' : 'center',
        alignItems: alignLeft ? 'start' : 'center',
      }}
    >
      {tag && (
        <span
          className={`textSmall ${styles.tagText}`}
          style={{
            backgroundColor: tagColor,
          }}
        >
          {tag}
        </span>
      )}

      {title && (
        <HeadingTag
          className={styles.titleText}
          style={{
            color: titleColor,
          }}
        >
          {renderText(title)}
        </HeadingTag>
      )}
    </div>
  );
};
