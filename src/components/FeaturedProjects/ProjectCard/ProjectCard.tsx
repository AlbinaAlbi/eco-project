import { useTranslatedCity } from '../../../hooks/useTranslatedCity';
import { Project } from '../../../types/Project';
import { Button } from '../../Button';
import styles from './ProjectCard.module.scss';
import { ImgAndStatus } from './ImgAndStatus';
import { Region } from './Region';
import { useLanguage } from '../../../context/LanguageContext';
import { TitleCard } from './TitleCard';
import { ProgressBar } from './ProgressBar';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();

  const { title, imageUrl, city, goalAmount, currentAmount, status } = project;

  const cityTranslations = useTranslatedCity(city);
  const regionText = `${cityTranslations} ${t('region')}`;

  const statusText = status === 'ACTIVE' ? 'Active' : 'Inactive';

  return (
    <Link to={`/projects/${project.id}`} className={styles.container}>
      <ImgAndStatus status={statusText} url={imageUrl} title={title} />

      <div className={styles.inform}>
        <Region regionText={regionText} />

        <TitleCard titleText={title} />
        <ProgressBar goalAmount={goalAmount} currentAmount={currentAmount} />
        <Button text={t('donate')} buttonWidth={'100%'} />
      </div>
    </Link>
  );
};
