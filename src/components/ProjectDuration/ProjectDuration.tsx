import styles from './ProjectDuration.module.scss';
import { TranslationKey, useLanguage } from '../../context/LanguageContext';
import { ProjectCreate } from '../../types/ProjectCreate';
import { useTranslatedText } from '../../hooks/useResponsiveText';

interface ProjectDurationProps {
  formDuration: string;
  setForm: React.Dispatch<React.SetStateAction<ProjectCreate>>;
  onChange: (value: string) => void;
  error?: TranslationKey;
}

export const ProjectDuration = ({
  formDuration,
  setForm,
  error,
  onChange,
}: ProjectDurationProps) => {
  const { t } = useLanguage();
  const translatedError = useTranslatedText(error);

  return (
    <div className={styles.projectDuration}>
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
            onClick={() => onChange(option.value)}
          >
            <div className={styles.check}>
              <div className={`${formDuration === option.value ? styles.active : ''}`} />
            </div>

            <span>{option.label}</span>
          </div>
        ))}
      </div>

      {error && <div className={`textSmall ${styles.error}`}>{translatedError}</div>}
    </div>
  );
};
