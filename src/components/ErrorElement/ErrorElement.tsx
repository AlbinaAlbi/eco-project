import styles from './ErrorElement.module.scss';
import img404 from '../../imgs/404.svg';
import alonePana from '../../imgs/Alone-pana 1.svg';
import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../Button';
import { useDeviceType } from '../../hooks/getDeviceType';

export const ErrorElement = () => {
  const { t } = useLanguage();
  let buttonWidth: string;
  const device = useDeviceType();

  switch (device) {
    case 'tablet':
      buttonWidth = '336px';
      break;
    case 'desktop':
      buttonWidth = '386px';
      break;
    default:
      buttonWidth = '328px';
  }

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div className={styles.errorWrapper}>
      <div className={styles.imageContainer}>
        <img className={styles.img404} src={img404} alt="Img 404" />
        <img className={styles.alonePana} src={alonePana} alt="Alone-pana" />
      </div>
      <h3 className={styles.evenNature}>{t('evenNature')}</h3>
      <Button text={t('goHome')} buttonWidth={buttonWidth} />
    </div>
  );
};
