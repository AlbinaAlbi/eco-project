import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './ProjectDescribe.module.scss';
import { ProjectDuration } from '../ProjectDuration';

export interface ProjectFormState {
  name: string;
  projectDescription: string;
  projectCategory: string;
  projectGoals: string;
  contactEmail: string;
  fundingGoal: string;
  projectDuration: string;
}

export const ProjectDescribe = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    projectDescription: '',
    projectCategory: '',
    projectGoals: '',
    contactEmail: '',
    fundingGoal: '',
    projectDuration: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      donationGoal: Number(form.fundingGoal),
      volunteersNeeded: Number(form.fundingGoal),
    };

    console.log('SEND TO API:', payload);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <div className={`textSecondary`}>{t('projectPame')}</div>
        <input
          name="projectPame"
          placeholder={t('chooseAName')}
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.describe}>
        <div className={`textSecondary`}>{t('projectDescription')}</div>
        <textarea
          name="projectDescription"
          placeholder={t('describeYourProject')}
          value={form.projectDescription}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.goals}>
        <div className={`textSecondary`}>{t('projectGoals')}</div>
        <textarea
          name="projectGoals"
          placeholder={t('clearlyDescribe')}
          value={form.projectGoals}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.choose}>
        <div className={`textSecondary`}>{t('projectCategory')}</div>
        <select
          name="projectCategory"
          value={form.projectCategory}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            {t('chooseCategory')}
          </option>
          <option value="environment">{t('categoryFilter.environment')}</option>
          <option value="animals">{t('categoryFilter.animals')}</option>
          <option value="education">{t('categoryFilter.education')}</option>
          <option value="community">{t('categoryFilter.community')}</option>
          <option value="culture">{t('categoryFilter.humanitarian')}</option>
        </select>
      </div>

      <div className={styles.input}>
        <div className={`textSecondary`}>{t('fundingGoal')}</div>
        <input
          name="fundingGoal"
          placeholder={t('targetAmount')}
          value={form.fundingGoal}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.input}>
        <div className={`textSecondary`}>{t('contactEmail')}</div>
        <input
          name="contactEmail"
          placeholder={t('contactYou')}
          value={form.contactEmail}
          onChange={handleChange}
          required
        />
      </div>

      <ProjectDuration formDuration={form.projectDuration} setForm={setForm} />
    </form>
  );
};
