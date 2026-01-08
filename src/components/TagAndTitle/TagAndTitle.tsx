import { TranslationKey, useLanguage } from '../../context/LanguageContext';
import styles from './TagAndTitle.module.scss';

interface TagAndTitleProps {
  data: {
    tagKey: TranslationKey;
    titleKey: TranslationKey;
    tagColor: string;
    titleColor: string;
  };
}

export const TagAndTitle = ({ data }: TagAndTitleProps) => {
  const { tagKey, titleKey, tagColor, titleColor } = data;
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <span className={`textSmall ${styles.tagText}`} style={{ backgroundColor: tagColor }}>
        {t(tagKey)}
      </span>
      <h1 className={styles.titleText} style={{ color: titleColor }}>
        {t(titleKey)}
      </h1>
    </div>
  );
};
