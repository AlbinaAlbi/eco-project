import styles from './ProjectDuration.module.scss';
import check from '../../../imgs/check.svg';
import { useLanguage } from '../../../context/LanguageContext';
import { Dispatch, SetStateAction } from 'react';
import { ProjectFormState } from '../ProjectDescribe';

interface ProjectDurationProps {
  formDuration: string;
  setForm: Dispatch<SetStateAction<ProjectFormState>>;
}

export const ProjectDuration = ({ formDuration, setForm }: ProjectDurationProps) => {
  const { t } = useLanguage();

  return (
    <div className={`${styles.projectDuration}`}>
      <div className="textBody">{t('projectDuration')}</div>

      <div className={`textSecondary ${styles.durationOptions}`}>
        {[
          { value: '2_weeks', label: `2 ${t('weeks')}` },
          { value: '3_weeks', label: `3 ${t('weeks')}` },
          { value: '1_month', label: `1 ${t('month')}` },
        ].map((option) => (
          <div
            key={option.value}
            className={styles.durationOption}
            onClick={() => setForm((prev) => ({ ...prev, projectDuration: option.value }))}
          >
            <div
              className={`${formDuration === option.value ? styles.active : ''} ${styles.check}`}
            >
              {formDuration === option.value && <img src={check} alt="Check" />}
            </div>

            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
