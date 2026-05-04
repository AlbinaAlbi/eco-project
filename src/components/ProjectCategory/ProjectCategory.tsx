import { useEffect, useRef, useState } from 'react';
import { TranslationKey, useLanguage } from '../../context/LanguageContext';
import styles from './ProjectCategory.module.scss';
import chevron from '../../imgs/Chevron.svg';
import { ProjectCreate } from '../../types/ProjectCreate';
import { useTranslatedText } from '../../hooks/useResponsiveText';

interface ProjectCategoryProps {
  form: ProjectCreate;
  setForm: React.Dispatch<React.SetStateAction<ProjectCreate>>; // ← исправлено
  textTranslate: string;
  textPlaceholder: string;
  error?: TranslationKey;
}

export const ProjectCategory = ({
  form,
  setForm,
  textTranslate,
  textPlaceholder,
  error,
}: ProjectCategoryProps) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const translatedError = useTranslatedText(error);

  const options = [
    { value: 'environment', label: t('categoryFilter.environment') },
    { value: 'animals', label: t('categoryFilter.animals') },
    { value: 'education', label: t('categoryFilter.education') },
    { value: 'community', label: t('categoryFilter.community') },
    { value: 'culture', label: t('categoryFilter.humanitarian') },
  ];

  const selected = options.find((o) => o.value === form.category);

  const handleSelect = (value: string) => {
    setForm((prev) => ({ ...prev, category: value }));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.choose} ref={wrapperRef}>
      <div className="textSecondary">{textTranslate}</div>

      <div
        className={`textBody ${styles.select} ${open ? styles.open : ''}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selected ? selected.label : textPlaceholder}</span>

        <img src={chevron} alt="Chevron" />
      </div>

      {error && <div className={`textSmall ${styles.error}`}>{translatedError}</div>}

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
