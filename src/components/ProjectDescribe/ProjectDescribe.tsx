import { useState } from 'react';
import { TranslationKey, useLanguage } from '../../context/LanguageContext';
import styles from './ProjectDescribe.module.scss';
import { Projectinput } from '../Projectinput';
import { ProjectCategory } from '../ProjectCategory';
import { Button } from '../Button';
import { useDeviceType } from '../../utils/getDeviceType';
import { createProject } from '../../api/project';
import { ProjectCreate } from '../../types/ProjectCreate';
import { Agree } from '../Agree';
import { ProjectDuration } from '../ProjectDuration';
import { ProjectImage } from '../ProjectImage';
import { Loader } from '../Loader';

type ProjectFormErrors = Partial<Record<keyof ProjectCreate, TranslationKey>>;

export interface ProjectFormState {
  projectName: string;
  projectDescription: string;
  projectCategory: string;
  projectGoals: string;
  contactEmail: string;
  fundingGoal: string;
  projectDuration: string;
  imageUrl: '';
}

export const ProjectDescribe = () => {
  const { t } = useLanguage();
  const device = useDeviceType();
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ProjectFormErrors>({});
  const [loading, setLoading] = useState(false);
  const newProject = {
    title: '',
    shortDescription: '',
    goals: '',
    category: '',
    contactEmail: '',
    goalAmount: 0,
    duration: '',
    imageUrl: '',
  };

  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState<ProjectCreate>(newProject);

  const setField = <K extends keyof ProjectCreate>(key: K, value: ProjectCreate[K]) => {
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleImageChange = (file: File) => {
    setPreviewFile(file);
    setField('imageUrl', URL.createObjectURL(file));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof ProjectCreate;
    const value = e.target.value;

    if (name === 'goalAmount') {
      setField(name, value === '' ? null : Number(value));
    } else {
      setField(name, value);
    }
  };

  let buttonWidth: string;

  switch (device) {
    case 'desktop':
      buttonWidth = '692px';
      break;
    default:
      buttonWidth = '100%';
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: ProjectFormErrors = {};

    if (form.title.trim().length < 3) {
      newErrors.title = 'projectNameMinLength';
    }

    if (form.shortDescription.trim().length < 20) {
      newErrors.shortDescription = 'shortDescriptionMinLength';
    }

    if (form.goals.trim().length < 10) {
      newErrors.goals = 'goalsDescription';
    }

    if (!form.category) {
      newErrors.category = 'selectCategory';
    }

    if (!form.goalAmount || form.goalAmount <= 0) {
      newErrors.goalAmount = 'validFundAmount';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.contactEmail)) {
      newErrors.contactEmail = 'invalidEmail';
    }

    if (!form.duration) {
      newErrors.duration = 'selectProjectDuration';
    }

    if (!form.imageUrl) {
      newErrors.imageUrl = 'addProjectImage';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      await createProject(form);
      setSuccess(true);
      setErrors({});
      setForm(newProject);
      setAgree(false);
      setPreviewFile(null);
    } catch {
      setErrors({ title: 'errorForSending' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectName')}
        textPlaceholder={t('chooseAName')}
        name={'title'}
        error={errors.title}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectDescription')}
        textPlaceholder={t('describeYourProject')}
        name={'shortDescription'}
        isTextArea={true}
        error={errors.shortDescription}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectGoals')}
        textPlaceholder={t('clearlyDescribe')}
        name={'goals'}
        isTextArea={true}
        error={errors.goals}
      />

      <ProjectCategory
        form={form}
        setForm={setForm}
        textTranslate={t('projectCategory')}
        textPlaceholder={t('chooseCategory')}
        error={errors.category}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('fundingGoal')}
        textPlaceholder={t('targetAmount')}
        name={'goalAmount'}
        type="number"
        error={errors.goalAmount}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('contactEmail')}
        textPlaceholder={t('contactYou')}
        name={'contactEmail'}
        error={errors.contactEmail}
      />

      <ProjectDuration
        formDuration={form.duration}
        onChange={(value) => setField('duration', value)}
        error={errors.duration}
      />

      <ProjectImage
        image={previewFile}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageChange(file);
        }}
        error={errors.imageUrl}
      />

      <Agree agree={agree} setAgree={setAgree} />

      <Button
        text={t('submitRequest')}
        color="green"
        buttonWidth={buttonWidth}
        type="submit"
        isDisabled={!agree}
      />

      {success && <p style={{ color: 'green' }}>{t('messageSent')}</p>}
    </form>
  );
};
