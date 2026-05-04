import { useLanguage } from '../../context/LanguageContext';
import { RequestListProps } from '../../types/RequestListProps';
import styles from './RequestInclude.module.scss';

interface RequestIncludeProps {
  list: RequestListProps[];
}

export const RequestInclude = ({ list }: RequestIncludeProps) => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <h4>{t('requestBlock.title')}</h4>
      <div className={styles.informContainer}>
        {list.map((inf) => (
          <div className={styles.boxInform} key={inf.id}>
            <h5>{inf.titleKey}</h5>
            <div className={styles.description}>{inf.descriptionKey}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
