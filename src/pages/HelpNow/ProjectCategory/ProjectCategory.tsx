import { useLanguage } from '../../../context/LanguageContext';
import { ProjectFormState } from '../ProjectDescribe';
import styles from './ProjectCategory.module.scss';

interface ProjectCategoryProps {
  form: ProjectFormState;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  textTranslate: string;
  textPlaceholder: string;
  name: keyof ProjectFormState;
}
export const ProjectCategory = ({
  form,
  handleChange,
  textTranslate,
  textPlaceholder,
  name,
}: ProjectCategoryProps) => {
  const { t } = useLanguage();

  return (
    <div className={styles.choose}>
      <div className={`textSecondary`}>{textTranslate}</div>
      <select name={name} value={form[name]} onChange={handleChange} required>
        <option value="" disabled>
          {textPlaceholder}
        </option>
        <option value="environment">{t('categoryFilter.environment')}</option>
        <option value="animals">{t('categoryFilter.animals')}</option>
        <option value="education">{t('categoryFilter.education')}</option>
        <option value="community">{t('categoryFilter.community')}</option>
        <option value="culture">{t('categoryFilter.humanitarian')}</option>
      </select>
    </div>
  );
};
