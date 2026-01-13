import { useLanguage } from '../../../context/LanguageContext';
import styles from './StepsList.module.scss';

interface StepsListProps {
  step: {
    id: number;
    titleKey: string;
    descriptionKey: string;
    icon: string;
  };
}

export const StepsList = ({ step }: StepsListProps) => {
  const { id, titleKey, descriptionKey, icon } = step;
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <div className={styles.imageContainer}>
          <img src={icon} alt={titleKey} />
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.text}>
        <div className={`textSecondary ${styles.stepNumber}`}>
          {t('step')} {id}
        </div>

        <h4 className={styles.stepTitle}>{titleKey}</h4>

        <p className={`textBody ${styles.stepDescription}`}>{descriptionKey}</p>
      </div>
    </div>
  );
};
