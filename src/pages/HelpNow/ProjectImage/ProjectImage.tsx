import { Button } from '../../../components/Button';
import { useLanguage } from '../../../context/LanguageContext';
import { useDeviceType } from '../../../hooks/getDeviceType';
import styles from './ProjectImage.module.scss';

interface ProjectImageProps {
  image: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProjectImage = ({ image, onChange }: ProjectImageProps) => {
  const { t } = useLanguage();
  const device = useDeviceType();

  let buttonWidth: string;

  switch (device) {
    case 'tablet':
      buttonWidth = '284px';
      break;
    case 'desktop':
      buttonWidth = '387px';
      break;
    default:
      buttonWidth = '100%';
  }

  return (
    <div className={styles.container}>
      <div className="textSecondary">{t('projectImage')}</div>
      <div className={`textSmall ${styles.upload}`}>{t('upload')}</div>
      <Button text={t('uploadImage')} color="white" buttonWidth={buttonWidth} />
    </div>
  );
};
