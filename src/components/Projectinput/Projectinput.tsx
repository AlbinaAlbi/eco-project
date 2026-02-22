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
}

export const Projectinput = ({
  form,
  handleChange,
  textTranslate,
  textPlaceholder,
  name,
  isTextArea,
  type,
}: ProjectinputProps) => {
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
    </div>
  );
};
