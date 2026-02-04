import { useNavigate, useLocation } from 'react-router-dom';
import arrowBack from '../../imgs/Chevron.svg';
import styles from './BackButton.module.scss';
import { TranslationKey, useLanguage } from '../../context/LanguageContext';
import { useDeviceType } from '../../hooks/getDeviceType';

const PAGE_KEYS: Record<string, TranslationKey> = {
  '/': 'home',
  '/projects': 'projects',
  '/contacts': 'contacts',
  '/about': 'about',
  '/help': 'supportTitle',
  '/login': 'login',
};

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const device = useDeviceType();
  const isMobile = device === 'mobile';

  const currentKey = PAGE_KEYS[location.pathname] ?? null;

  if (location.pathname === '/') {
    return null;
  }

  return (
    <button type="button" className={styles.backButton}>
      {isMobile ? (
        <span className={`textSecondary ${styles.mobile}`} onClick={() => navigate('/')}>
          <div className={styles.image}>
            <img src={arrowBack} alt="Back" />
          </div>

          {t('back')}
        </span>
      ) : (
        <span className={`textSecondary ${styles.desktop}`}>
          <span onClick={() => navigate('/')}>{t('home')}</span>
          {currentKey && (
            <>
              <div className={styles.image}>
                <img src={arrowBack} alt="Back" />
              </div>
              <span className={styles.current}>{t(currentKey) as string}</span>
            </>
          )}
        </span>
      )}
    </button>
  );
};
