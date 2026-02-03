import { ProjectFormState } from '../ProjectDescribe';
import styles from './Projectinput.module.scss';

interface ProjectinputProps {
  form: ProjectFormState;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  textTranslate: string;
  textPlaceholder: string;
  name: keyof ProjectFormState;
  isTextArea?: boolean;
}
export const Projectinput = ({
  form,
  handleChange,
  textTranslate,
  textPlaceholder,
  name,
  isTextArea,
}: ProjectinputProps) => {
  return (
    <div className={styles.input}>
      <div className={`textSecondary`}>{textTranslate}</div>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={textPlaceholder}
          value={form[name]}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          name={name}
          placeholder={textPlaceholder}
          value={form[name]}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );
};
