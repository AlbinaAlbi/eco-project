import { TranslationKey, useLanguage } from '../../context/LanguageContext';
import { useTranslatedText } from '../../hooks/useResponsiveText';
import { ProjectCreate } from '../../types/ProjectCreate';
import styles from './Projectinput.module.scss';

type TextFieldName = Exclude<keyof ProjectCreate, 'image'>;

interface ProjectinputProps {
  form: ProjectCreate;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textTranslate: string;
  textPlaceholder: string;
  name: TextFieldName;
  isTextArea?: boolean;
  type?: string;
  error?: TranslationKey;
}

export const Projectinput = ({
  form,
  handleChange,
  textTranslate,
  textPlaceholder,
  name,
  isTextArea,
  type,
  error,
}: ProjectinputProps) => {
  const translatedError = useTranslatedText(error);

  return (
    <div className={styles.input}>
      <div className={`textSecondary ${styles.container}`}>{textTranslate}</div>
      {isTextArea ? (
        <textarea
          className="textBody"
          name={name}
          placeholder={textPlaceholder}
          value={form[name] ?? ''}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          type={type || 'text'}
          className="textBody"
          name={name}
          placeholder={textPlaceholder}
          value={form[name] ?? ''}
          onChange={handleChange}
          required
          min={type === 'number' ? 0 : undefined}
          step={type === 'number' ? 1 : undefined}
        />
      )}
      {error && <div className={`textSmall ${styles.error}`}>{translatedError}</div>}
    </div>
  );
};
