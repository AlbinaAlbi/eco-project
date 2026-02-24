// validators/projectValidator.ts
import { ProjectCreate } from '../types/ProjectCreate';

export const validateProject = (form: ProjectCreate, t: any) => {
  const errors: Partial<Record<keyof ProjectCreate, string>> = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (form.title.trim().length < 3) errors.title = t('projectNameMinLength');
  if (form.shortDescription.trim().length < 20)
    errors.shortDescription = t('shortDescriptionMinLength');
  if (form.goals.trim().length < 10) errors.goals = t('goalsDescription');
  if (!form.category) errors.category = t('selectCategory');
  if (!form.goalAmount || form.goalAmount <= 0) errors.goalAmount = t('validFundAmount');
  if (!emailRegex.test(form.contactEmail)) errors.contactEmail = t('invalidEmail');
  if (!form.duration) errors.duration = t('selectProjectDuration');
  if (!form.imageUrl) errors.imageUrl = t('addProjectImage');

  return errors;
};
