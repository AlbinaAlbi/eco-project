import { useNavigate, useLocation } from 'react-router-dom';
import arrowBack from '../../imgs/Chevron.svg';
import styles from './BackButton.module.scss';
import { TranslationKey, useLanguage } from '../../context/LanguageContext';
import { useDeviceType } from '../../utils/getDeviceType';
import { useAppSelector } from '../../hooks/hooks';
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
  const pathnames = location.pathname.split('/').filter(Boolean);
  const { currentProject } = useAppSelector((state) => state.projects);
  const { t } = useLanguage();
  const device = useDeviceType();
  const isMobile = device === 'mobile';

  const getTranslatedText = (key?: TranslationKey | string): string => {
    if (!key) return '';
    const value = t(key as TranslationKey);
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.join(' ');
    if ('mobile' in value && 'desktop' in value) {
      return isMobile ? value.mobile.join(' ') : value.desktop.join(' ');
    }
    return '';
  };
  console.log('BackButton pathnames:', pathnames);

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
          {pathnames.map((segment, index) => {
            const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
            const translationKey = PAGE_KEYS[routeTo] ?? segment;

            return (
              <span key={routeTo} className={styles.segment} onClick={() => navigate(routeTo)}>
                <div className={styles.image}>
                  <img src={arrowBack} alt="Back" />
                </div>
                <span className={styles.current}>
                  {segment.match(/^\d+$/) && currentProject
                    ? currentProject.title
                    : getTranslatedText(translationKey)}
                </span>
              </span>
            );
          })}
        </span>
      )}
    </button>
  );
};
