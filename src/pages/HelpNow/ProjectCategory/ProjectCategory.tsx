import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { ProjectFormState } from '../ProjectDescribe';
import styles from './ProjectCategory.module.scss';
import chevron from '../../../imgs/Chevron.svg';

interface ProjectCategoryProps {
  form: ProjectFormState;
  setForm: React.Dispatch<React.SetStateAction<ProjectFormState>>;
  textTranslate: string;
  textPlaceholder: string;
}

export const ProjectCategory = ({
  form,
  setForm,
  textTranslate,
  textPlaceholder,
}: ProjectCategoryProps) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const options = [
    { value: 'environment', label: t('categoryFilter.environment') },
    { value: 'animals', label: t('categoryFilter.animals') },
    { value: 'education', label: t('categoryFilter.education') },
    { value: 'community', label: t('categoryFilter.community') },
    { value: 'culture', label: t('categoryFilter.humanitarian') },
  ];

  const selected = options.find((o) => o.value === form.projectCategory);

  const handleSelect = (value: string) => {
    setForm((prev) => ({ ...prev, projectCategory: value }));
    setOpen(false);
  };

  return (
    <div className={styles.choose}>
      <div className="textSecondary">{textTranslate}</div>

      <div
        className={`textBody ${styles.select} ${open ? styles.open : ''}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selected ? selected.label : textPlaceholder}</span>

        <img src={chevron} alt="Chevron" />
      </div>

      {open && (
        <ul className={styles.list}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
