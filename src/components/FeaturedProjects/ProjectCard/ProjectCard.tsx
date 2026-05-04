import { useTranslatedCity } from '../../../hooks/useTranslatedCity';
import { Button } from '../../Button';
import styles from './ProjectCard.module.scss';
import { ImgCard } from './ImgCard';
import { useLanguage } from '../../../context/LanguageContext';
import { TitleCard } from './TitleCard';
import { ProgressBar } from './ProgressBar';
import { Link, useLocation } from 'react-router-dom';
import { Region } from './Region';
import { StatusCard } from './StatusCard/StatusCard';
import { Project } from '../../../types/Project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();
  const location = useLocation();

  const { title, city, goalAmount, currentAmount, status, imageDesktop } = project;

  const cityTranslations = useTranslatedCity(city);
  const regionText = `${cityTranslations} ${t('region')}`;

  const statusText = status === 'ACTIVE' ? 'Active' : 'Inactive';

  return (
    <Link
      to={`/projects/${project.id}`}
      className={styles.container}
      state={{ from: location.pathname }}
    >
      <ImgCard url={imageDesktop} title={title} />

      <div className={styles.inform}>
        <div className={styles.regionAndStatus}>
          <Region regionText={regionText} />
          <StatusCard status={statusText} />
        </div>

        <TitleCard titleText={title} />
        <ProgressBar goalAmount={goalAmount} currentAmount={currentAmount} />
        <Button text={t('donate')} buttonWidth={'100%'} />
      </div>
    </Link>
  );
};
