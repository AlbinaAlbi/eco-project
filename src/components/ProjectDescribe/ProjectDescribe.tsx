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
  const [previewFile, setPreviewFile] = useState<File | null>(null);
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

    try {
      const data = await createProject(form);

      console.log('Проект создан:', data);
      alert('Проект успешно создан!');
    } catch (err) {
      console.error(err);
      alert('Ошибка при создании проекта.');
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
      <Agree />
      <Button text={t('submitRequest')} color="green" buttonWidth={buttonWidth} type="submit" />
    </form>
  );
};
