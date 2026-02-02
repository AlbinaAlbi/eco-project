import { useLanguage } from '../../../context/LanguageContext';
import { useRequestList } from '../../../hooks/useRequestList';
import styles from './RequestInclude.module.scss';

export const RequestInclude = () => {
  const requestList = useRequestList();
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <h4>{t('requestBlockTitle')}</h4>
      <div className={styles.informContainer}>
        {requestList.map((inf) => (
          <div className={styles.boxInform} key={inf.id}>
            <h5>{inf.titleKey}</h5>
            <div className={styles.description}>{inf.descriptionKey}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
