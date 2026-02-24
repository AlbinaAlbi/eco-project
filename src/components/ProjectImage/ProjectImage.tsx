import { useRef } from 'react';
import { Button } from '../Button';
import { TranslationKey, useLanguage } from '../../context/LanguageContext';
import { useDeviceType } from '../../utils/getDeviceType';
import styles from './ProjectImage.module.scss';
import { useTranslatedText } from '../../hooks/useResponsiveText';

interface ProjectImageProps {
  image: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: TranslationKey;
}

export const ProjectImage = ({ image, onChange, error }: ProjectImageProps) => {
  const { t } = useLanguage();
  const device = useDeviceType();
  const inputRef = useRef<HTMLInputElement>(null);
  const translatedError = useTranslatedText(error);

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

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={styles.container}>
      <div className="textSecondary">{t('projectImage')}</div>
      <div className={`textSmall ${styles.upload}`}>{t('upload')}</div>

      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={onChange}
      />

      <div className={styles.button}>
        <Button
          text={t('uploadImage')}
          color="white"
          buttonWidth={buttonWidth}
          onClick={handleButtonClick}
        />
      </div>
      {error && <div className={`textSmall ${styles.error}`}>{translatedError}</div>}

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Превью"
          style={{ marginTop: '10px', maxWidth: buttonWidth }}
        />
      )}
    </div>
  );
};
