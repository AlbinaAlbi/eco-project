import { useDeviceType } from '../../hooks/getDeviceType';
import { useRenderText } from '../../hooks/renderText';
import styles from './TagAndTitle.module.scss';

interface TagAndTitleProps {
  tag: string;
  title: string | string[];
  tagColor: string;
  titleColor: string;
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
  const device = useDeviceType();
  const onDesktop = device !== 'mobile';

  return (
    <div
      className={styles.container}
      style={{ alignItems: alignLeft && onDesktop ? 'start' : 'center' }}
    >
      <span className={`textSmall ${styles.tagText}`} style={{ backgroundColor: tagColor }}>
        {tag}
      </span>

      <HeadingTag
        className={styles.titleText}
        style={{ color: titleColor, textAlign: alignLeft && onDesktop ? 'start' : 'center' }}
      >
        {renderText(title)}
      </HeadingTag>
    </div>
  );
};
