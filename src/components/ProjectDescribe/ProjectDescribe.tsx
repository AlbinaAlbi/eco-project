import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState<ProjectCreate>({
    title: '',
    shortDescription: '',
    goals: '',
    category: '',
    contactEmail: '',
    goalAmount: 0,
    duration: '',
    imageUrl: '',
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreviewFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, imageUrl: URL.createObjectURL(file) }));
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) {
      setError('');
    }

    const name = e.target.name as keyof ProjectCreate;
    const value = e.target.value;

    setForm((prev) => {
      if (name === 'goalAmount') {
        return {
          ...prev,
          goalAmount: value === '' ? null : Number(value),
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
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

    if (form.title.trim().length < 3) {
      setError(t('projectNameMinLength'));
      return;
    }

    if (form.shortDescription.trim().length < 20) {
      setError(t('shortDescriptionMinLength'));
      return;
    }

    if (form.goals.trim().length < 10) {
      setError(t('goalsDescription'));
      return;
    }

    if (!form.category) {
      setError(t('selectCategory'));
      return;
    }

    if (!form.goalAmount || form.goalAmount <= 0) {
      setError(t('validFundAmount'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.contactEmail)) {
      setError(t('invalidEmail'));
      return;
    }

    if (!form.duration) {
      setError(t('selectProjectDuration'));
      return;
    }

    if (!form.imageUrl) {
      setError(t('addProjectImage'));
      return;
    }

    try {
      setLoading(true);
      await createProject(form);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError(t('errorForSending'));
      setTimeout(() => setError(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectName')}
        textPlaceholder={t('chooseAName')}
        name={'title'}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectDescription')}
        textPlaceholder={t('describeYourProject')}
        name={'shortDescription'}
        isTextArea={true}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('projectGoals')}
        textPlaceholder={t('clearlyDescribe')}
        name={'goals'}
        isTextArea={true}
      />

      <ProjectCategory
        form={form}
        setForm={setForm}
        textTranslate={t('projectCategory')}
        textPlaceholder={t('chooseCategory')}
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('fundingGoal')}
        textPlaceholder={t('targetAmount')}
        name={'goalAmount'}
        type="number"
      />

      <Projectinput
        form={form}
        handleChange={handleChange}
        textTranslate={t('contactEmail')}
        textPlaceholder={t('contactYou')}
        name={'contactEmail'}
      />

      <ProjectDuration formDuration={form.duration} setForm={setForm} />
      <ProjectImage image={previewFile} onChange={handleImageChange} />
      <Agree agree={agree} setAgree={setAgree} />
      <Button
        text={t('submitRequest')}
        color="green"
        buttonWidth={buttonWidth}
        type="submit"
        isDisabled={agree}
      />
      {success && <p style={{ color: 'green' }}>{t('messageSent')}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};
