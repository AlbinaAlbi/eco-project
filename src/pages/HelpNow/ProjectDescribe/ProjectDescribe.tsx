import { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './ProjectDescribe.module.scss';
import { ProjectDuration } from '../ProjectDuration';
import { Projectinput } from '../Projectinput';
import { ProjectCategory } from '../ProjectCategory';
import { ProjectImage } from '../ProjectImage';
import { Agree } from '../Agree';

export interface ProjectFormState {
  projectName: string;
  projectDescription: string;
  projectCategory: string;
  projectGoals: string;
  contactEmail: string;
  fundingGoal: string;
  projectDuration: string;
  image: File | null;
}

export const ProjectDescribe = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState<ProjectFormState>({
    projectName: '',
    projectDescription: '',
    projectCategory: '',
    projectGoals: '',
    contactEmail: '',
    fundingGoal: '',
    projectDuration: '',
    image: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const name = e.target.name as keyof ProjectFormState;
    const value = e.target.value;
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectName')}
        textPlaceholder={t('chooseAName')}
        name={'projectName'}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectDescription')}
        textPlaceholder={t('describeYourProject')}
        name={'projectDescription'}
        isTextArea={true}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectGoals')}
        textPlaceholder={t('clearlyDescribe')}
        name={'projectGoals'}
        isTextArea={true}
      />

      <ProjectCategory
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectCategory')}
        name={'projectCategory'}
        textPlaceholder={t('chooseCategory')}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('fundingGoal')}
        textPlaceholder={t('targetAmount')}
        name={'fundingGoal'}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('contactEmail')}
        textPlaceholder={t('contactYou')}
        name={'contactEmail'}
      />

      <ProjectDuration formDuration={form.projectDuration} setForm={setForm} />

      <ProjectImage image={form.image} onChange={handleImageChange} />
      <Agree />
    </form>
  );
};
