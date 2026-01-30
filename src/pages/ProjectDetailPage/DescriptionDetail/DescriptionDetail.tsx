import { TagAndTitle } from '../../../components/TagAndTitle';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './DescriptionDetail.module.scss';

interface DescriptionDetailProps {
  text: string[];
}

export const DescriptionDetail = ({ text }: DescriptionDetailProps) => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <TagAndTitle tag={t('descriptionText')} tagColor={'#EDEEEE'} />
      <div className={`textBody ${styles.descriptionText}`}>
        {text.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </div>
  );
};
